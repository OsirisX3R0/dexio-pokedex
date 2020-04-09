import React, { useState } from 'react';
import { PokemonListItem, PokemonName } from '../../Styles/Pokemon';

const PokemonItem = ({ pokemon }) => {
    const splitUrl = pokemon.url
        .split("/")
        .filter(i => i !== "");
    const [id] = useState(splitUrl[splitUrl.length - 1])
    return (
        <PokemonListItem>
            <PokemonName to={"/pokemon/" + id}>{pokemon.name}</PokemonName>
        </PokemonListItem>
    )
}

export default PokemonItem;