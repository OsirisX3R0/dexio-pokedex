import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../../Services/pokemonService';

const Pokemon = () => {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemon(id)
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    const displayPokemon = () => {
        if (pokemon) {
            return (
                <h1>{pokemon.name}</h1>
            )
        }

        return <div></div>
    }

    return displayPokemon()
}

export default Pokemon;