import React from 'react';
import { ListItem, ListName } from '../../Styles/General';
import { formatName } from '../../Util/nameHelpers';

const AbilityItem = ({ name }) => {
    return (
        <ListItem>
            <ListName to={"/ability/" + name}>{formatName(name)}</ListName>
        </ListItem>
    )
}

export default AbilityItem;