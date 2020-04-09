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
            debugger;
            pokemon.types.forEach(type => {
                promises = [...promises, getType(type.type.name)]
            })            

            Promise.all(promises)
                .then(res => {
                    setTypes(res.map(t => t.data));
                })
        }
    }, [pokemon])

    return (
        <PokemonContext.Provider value={{
            name,
            pokemon,
            statTotal,
            types,
            loading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}