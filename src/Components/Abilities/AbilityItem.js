import React from 'react';
import { ListItem, ListName } from '../../Styles/General';

const AbilityItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/ability/" + name}>{name}</ListName>
        </ListItem>
    )
}

export default AbilityItem;