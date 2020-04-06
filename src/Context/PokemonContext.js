import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../Services/pokemonService';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [statTotal, setStatTotal] = useState(null);

    useEffect(() => {
        getPokemon(id)
            .then(res => {
                setPokemon(res.data);
                setStatTotal(res.data.stats
                    .map(s => s.base_stat)
                    .reduce((total, next) => total + next))
            })
    }, [])

    return (
        <PokemonContext.Provider value={{
            id,
            pokemon,
            statTotal
        }}>
            {children}
        </PokemonContext.Provider>
    )
}