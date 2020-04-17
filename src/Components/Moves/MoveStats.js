import React, { useContext } from 'react';
import { MoveContext } from '../../Context/MoveContext';
import { MoveStatTable, MoveStatTitle, MoveStatValue } from '../../Styles/Moves';

const MoveStats = () => {
    const { move } = useContext(MoveContext);

    const displayStats = () => {
        if (!move)
            return null

        return (
            <MoveStatTable>
                <MoveStatTitle>Power</MoveStatTitle>
                <MoveStatValue>{move.power}</MoveStatValue>
                <MoveStatTitle>Accuracy</MoveStatTitle>
                <MoveStatValue>{move.accuracy}</MoveStatValue>
                <MoveStatTitle>PP</MoveStatTitle>
                <MoveStatValue>{move.pp}</MoveStatValue>
                <MoveStatTitle>Priority</MoveStatTitle>
                <MoveStatValue>{move.priority}</MoveStatValue>
            </MoveStatTable>
        )
    }

    return displayStats()
}

export default MoveStats;