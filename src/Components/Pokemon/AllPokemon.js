import React, { useState, useEffect } from 'react';
import { PokemonList, PokemonListItem, PokemonListSprite, PokemonInfo, PokemonName, PokemonNumber, PokemonTypes, Type } from '../../Styles/Pokemon';
import PokemonItem from './PokemonItem';
import { getAllPokemon } from '../../Services/pokemonService';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';

const AllPokemon = ({ history }) => {
    const [allPokemon, setAllPokemon] = useState([]);
    useActivePage('Pokemon')

    useEffect(() => {
        getAllPokemon()
            .then(res => {
                setAllPokemon(res.data.results)
            });
    }, [])

    const displayPokemonList = () => {
        if (allPokemon && allPokemon.length > 0) {
            return allPokemon.map((pokemon, pokemonIndex) => {
                 return <PokemonItem pokemon={pokemon} key={pokemonIndex} />
            })
        }
    }

    return (
        <Layout history={history}>
            <PokemonList>
                {displayPokemonList()}
            </PokemonList>
        </Layout>
    )
}

export default AllPokemon;