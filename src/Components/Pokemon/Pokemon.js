import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../../Services/pokemonService';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';

const Pokemon = () => {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null)
    useActivePage('Pokemon Detail');
    useEffect(() => {
        getPokemon(id)
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    const displayPokemon = () => {
        if (pokemon) {
            return (
                <Layout>
                    <h1>{pokemon.name}</h1>
                </Layout>
            )
        }

        return <div></div>
    }

    return displayPokemon()
}

export default Pokemon;