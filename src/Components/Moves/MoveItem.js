import React from 'react';
import { ListItem, ListName } from '../../Styles/General';
import { formatName } from '../../Util/nameHelpers';

const MoveItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/move/" + name}>{formatName(name)}</ListName>
        </ListItem>
    )
}

export default MoveItem;