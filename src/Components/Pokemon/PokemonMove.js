import React, { useEffect, useState, useContext } from 'react';
import { getMove } from '../../Services/moveService';
import { GlobalContext } from '../../Context/GlobalContext';
import { 
    MoveTableRow, 
    MoveTableCell,
    MoveTableName, 
    MoveTableType, 
    MoveTableClass, 
} from '../../Styles/Pokemon';

const PokemonMove = ({ types, moveInfo }) => {
    const { genFilter } = useContext(GlobalContext);
    const [move, setMove] = useState(null);
    const [details] = useState(moveInfo.version_group_details.filter(vgd => vgd.version_group.name === genFilter)[0]);

    useEffect(() => {
        getMove(moveInfo.move.name)
            .then(res => setMove(res.data))
    }, [moveInfo])

    const displayMove = () => {
        if (!move)
            return null;

        return (
            <MoveTableRow>
                <MoveTableCell>{details.level_learned_at}</MoveTableCell>
                <MoveTableName types={types} type={move.type.name} typeClass={move.damage_class.name}>{moveInfo.move.name}</MoveTableName>
                <MoveTableType type={move.type.name}>{move.type.name}</MoveTableType>
                <MoveTableClass typeClass={move.damage_class.name}>{move.damage_class.name}</MoveTableClass>
                <MoveTableCell>{move.power}</MoveTableCell>
                <MoveTableCell>{move.accuracy}</MoveTableCell>
                <MoveTableCell>{move.pp}</MoveTableCell>
            </MoveTableRow>
        )
    }

    return displayMove()
}

export default PokemonMove;