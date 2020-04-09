import React from 'react';
import { PokemonListItem, PokemonName } from '../../Styles/Pokemon';

const PokemonItem = ({ name }) => {
    return (
        <PokemonListItem>
            <PokemonName to={"/pokemon/" + name}>{name}</PokemonName>
        </PokemonListItem>
    )
}

export default PokemonItem;