import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../Services/pokemonService';
import { getType } from '../Services/typeService';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [statTotal, setStatTotal] = useState(null);
    const [types, setTypes] = useState([]);
    const [relations, setRelations] = useState({});
    const [loading, setLoading] = useState(true);

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
        let promises = [];

        if (pokemon) {
            //debugger;
            pokemon.types.forEach(type => {
                promises = [...promises, getType(type.type.name)]
            })            

            Promise.all(promises)
                .then(res => {
                    let typesArr = res.map(t => t.data);
                    setTypes(typesArr);
                    getDamageRelations(typesArr);
                })
        }
    }, [pokemon])

    const getDamageRelations = typeRelations => {
        if (typeRelations.length === 1)
            return typeRelations[0].damage_relations;

        let fullRelations = {};

        if (typeRelations.length > 0) {
            fullRelations = {
                double_damage_from: [...typeRelations[0].damage_relations.double_damage_from, ...typeRelations[1].damage_relations.double_damage_from],
                double_damage_to: [...typeRelations[0].damage_relations.double_damage_to, ...typeRelations[1].damage_relations.double_damage_to],
                half_damage_from: [...typeRelations[0].damage_relations.half_damage_from, ...typeRelations[1].damage_relations.half_damage_from],
                half_damage_to: [...typeRelations[0].damage_relations.half_damage_to, ...typeRelations[1].damage_relations.half_damage_to],
                no_damage_from: [...typeRelations[0].damage_relations.no_damage_from, ...typeRelations[1].damage_relations.no_damage_from],
                no_damage_to: [...typeRelations[0].damage_relations.no_damage_to, ...typeRelations[1].damage_relations.no_damage_to],
            };

            //let weakTo = ;

            setRelations({
                // strongAgainst: fullRelations.double_damage_to.map(type => {
                //     return {
                //         name: type.name,
                //         power: fullRelations.double_damage_to.filter(r => r.name === type.name).length * 2
                //     }
                // }),
                weakTo: fullRelations.double_damage_from
                    .map(type => {
                        return {
                            name: type.name,
                            power: fullRelations.double_damage_from.filter(r => r.name === type.name).length * 2
                        }
                    })
                    .filter((type, index, self) => 
                        index === self.findIndex((t) => (
                            t.name === type.name && t.power === type.power
                        ))
                    ),
                resistantTo: fullRelations.half_damage_from
                    .map(type => {
                        return {
                            name: type.name,
                            power: fullRelations.half_damage_from.filter(r => r.name === type.name).length === 1
                                ? "1/2"
                                : "1/4"
                        }
                    })
                    .filter((type, index, self) => 
                        index === self.findIndex((t) => (
                            t.name === type.name && t.power === type.power
                        ))
                    ),
                // weakAgainst: fullRelations.half_damage_to.map(type => {
                //     return {
                //         name: type.name,
                //         power: fullRelations.half_damage_to.filter(r => r.name === type.name).length / 2
                //     }
                // }),
                immuneTo: fullRelations.no_damage_from
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
                    )
            })
        }
    }

    return (
        <PokemonContext.Provider value={{
            name,
            pokemon,
            statTotal,
            relations,
            loading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

const isNormal = r => r.name === "normal";

const isFighting = r => r.name === "fighting";