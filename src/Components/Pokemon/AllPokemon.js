import React, { useState, useEffect } from 'react';
import { PokemonList, PokemonListItem, PokemonListSprite, PokemonInfo, PokemonName, PokemonNumber, PokemonTypes, Type } from '../../Styles/Pokemon';
import PokemonItem from './PokemonItem';
import { getAllPokemon } from '../../Services/pokemonService';

const AllPokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);

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
        <>
            <PokemonList>
                {displayPokemonList()}
            </PokemonList>
        </>
    )
}

export default AllPokemon;