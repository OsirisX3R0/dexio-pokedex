import React, { createContext, useState, useEffect, useCallback } from 'react';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import { useParams } from 'react-router';
import { getPokemon } from '../Services/pokemonService';
import { getAllTypes, getType } from '../Services/typeService';
import { getMove } from '../Services/moveService';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [statTotal, setStatTotal] = useState(null);
    const [types, setTypes] = useState(null);
    const [relations, setRelations] = useState(null);
    const [loading, setLoading] = useState(true);    

    const getDamageRelations = useCallback(typeRelations => {
        if (types) {
            if (typeRelations.length > 0) {
                let fullRelations = {};
    
                if (typeRelations.length === 1) {
                    fullRelations = typeRelations[0].damage_relations;
                } else {
                    fullRelations = {
                        double_damage_from: [...typeRelations[0].damage_relations.double_damage_from, ...typeRelations[1].damage_relations.double_damage_from],
                        double_damage_to: [...typeRelations[0].damage_relations.double_damage_to, ...typeRelations[1].damage_relations.double_damage_to],
                        half_damage_from: [...typeRelations[0].damage_relations.half_damage_from, ...typeRelations[1].damage_relations.half_damage_from],
                        half_damage_to: [...typeRelations[0].damage_relations.half_damage_to, ...typeRelations[1].damage_relations.half_damage_to],
                        no_damage_from: [...typeRelations[0].damage_relations.no_damage_from, ...typeRelations[1].damage_relations.no_damage_from],
                        no_damage_to: [...typeRelations[0].damage_relations.no_damage_to, ...typeRelations[1].damage_relations.no_damage_to],
                    }
                }

                let weakTo = fullRelations.double_damage_from
                    .map(type => {
                        return {
                            name: type.name,
                            power: fullRelations.double_damage_from.filter(r => r.name === type.name).length * 2
                        }
                    })
                    .filter((type, index, self) => 
                        index === self.findIndex((t) => (
                            (t.name === type.name && t.power === type.power) ||
                            (
                                fullRelations.half_damage_from.some(r => r.name === type.name) ||
                                fullRelations.no_damage_from.some(r => r.name === type.name)
                            )
                        ))
                    )
                    .sort((a, b) => (a.power > b.power) ? 1 : -1)

                let resistantTo = fullRelations.half_damage_from
                    .map(type => {
                        return {
                            name: type.name,
                            power: fullRelations.half_damage_from.filter(r => r.name === type.name).length === 1
                                ? 0.5
                                : 0.25
                        }
                    })
                    .filter((type, index, self) => 
                        index === self.findIndex((t) => (
                            (t.name === type.name && t.power === type.power) ||
                            (
                                fullRelations.double_damage_from.some(r => r.name === type.name) ||
                                fullRelations.no_damage_from.some(r => r.name === type.name)
                            )
                        ))
                    )
                    .sort((a, b) => (a.power < b.power) ? 1 : -1)

                let immuneTo = fullRelations.no_damage_from
                    .map(type => {
                        return {
                            name: type.name,
                            power: 0
                        }
                    })
                    .filter((type, index, self) => 
                        index === self.findIndex((t) => (
                            t.name === type.name && t.power === type.power
                        ))
                    );

                let normallyDamaged = types
                    .map(type => {
                        return {
                            name: type,
                            power: 1
                        }
                    })
                    .filter(t => 
                        (
                            fullRelations.double_damage_from.some(r => r.name === t.name) && 
                            fullRelations.half_damage_from.some(r => r.name === t.name)
                        ) ||
                        !(
                            (t.name === 'unknown' || t.name === 'shadow') ||                        
                            fullRelations.double_damage_from.some(r => r.name === t.name) ||
                            fullRelations.half_damage_from.some(r => r.name === t.name) ||
                            fullRelations.no_damage_from.some(r => r.name === t.name)
                        ))

                setRelations({
                    weakTo: weakTo
                        .filter((type, index, self) => 
                            index === self.findIndex((t) => (
                                (t.name === type.name && t.power === type.power) ||
                                (
                                    fullRelations.half_damage_from.some(r => r.name === type.name) ||
                                    fullRelations.no_damage_from.some(r => r.name === type.name)
                                )
                            ))
                        ),
                    resistantTo,
                    immuneTo,
                    normallyDamaged
                })
            }
        }
    }, [types])

    useEffect(() => {
        getPokemon(name)
            .then(res => {
                setPokemon(res.data);
                setStatTotal(res.data.stats
                    .map(s => s.base_stat)
                    .reduce((total, next) => total + next))
            })
            .finally(() => setLoading(false))
        
    }, [name])

    useEffect(() => {
        let promises = [getAllTypes()];

        if (pokemon) {
            pokemon.types.forEach(type => {
                promises = [...promises, getType(type.type.name)]
            })

            pokemon.moves.forEach(move => {
                promises = [...promises, getMove(move.move.name)]
            })

            Promise.all(promises)
                .then(res => {
                    if (!types)
                        setTypes(res[0].data.results.map(t => t.name));

                    let typesArr = res.filter(t => t.data.damage_relations).map(t => t.data);
                    getDamageRelations(typesArr);
                })
        }
    }, [pokemon, types, getDamageRelations])

    return (
        <PokemonContext.Provider value={{
            name,
            pokemon,
            statTotal,
            relations,
            loading
        }}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                {children}
            </BlockUi>
        </PokemonContext.Provider>
    )
}