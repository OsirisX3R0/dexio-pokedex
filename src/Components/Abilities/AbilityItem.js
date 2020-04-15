import React from 'react';
import { AbilityListItem, AbilityName } from '../../Styles/Abilities';

const AbilityItem = ({ name }) => {
    return (
        <AbilityListItem>
            <AbilityName to={"/ability/" + name}>{name}</AbilityName>
        </AbilityListItem>
    )
}

export default AbilityItem;