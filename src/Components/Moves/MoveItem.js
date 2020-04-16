import React from 'react';
import { ListItem, ListName } from '../../Styles/General';

const MoveItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/move/" + name}>{name}</ListName>
        </ListItem>
    )
}

export default MoveItem;