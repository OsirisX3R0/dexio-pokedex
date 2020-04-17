import React from 'react';
import { ListItem, ListName } from '../../Styles/General';
import { formatName } from '../../Util/nameHelpers';

const PokemonItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/pokemon/" + name}>{formatName(name)}</ListName>
        </ListItem>
    )
}

export default PokemonItem;