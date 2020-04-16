import React from 'react';
import { ListItem, ListName } from '../../Styles/General';

const PokemonItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/pokemon/" + name}>{name}</ListName>
        </ListItem>
    )
}

export default PokemonItem;