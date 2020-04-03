import React, { useState, useEffect } from 'react';
import { PokemonList, PokemonListItem, PokemonListSprite, PokemonInfo, PokemonName, PokemonNumber, PokemonTypes, Type } from '../../Styles/Pokemon';
import { getAllPokemon } from '../../Services/pokemonService'

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
                 return (
                    <PokemonListItem key={pokemonIndex}>
                        <PokemonListSprite src={pokemon.sprites && pokemon.sprites.front_default} />
                        <PokemonInfo>
                            <PokemonName>{pokemon.name}</PokemonName>
                            <PokemonNumber>{pokemon.order}</PokemonNumber>
                        </PokemonInfo>
                        <PokemonTypes>
                            {pokemon.types && pokemon.types.map((type, typeIndex) => (
                                <Type key={typeIndex}>{type.name}</Type>
                            ))}
                        </PokemonTypes>
                    </PokemonListItem>
                )
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