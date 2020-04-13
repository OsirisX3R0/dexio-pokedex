import React, { useContext, useState, useEffect } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import { GlobalContext } from '../../Context/GlobalContext';
import PokemonMove from './PokemonMove';
import { 
    MoveTable,
    MoveTableHead,
    MoveTableRow,
    MoveTableTitle,
    MoveTableBody
 } from '../../Styles/Pokemon';

const PokemonMoves = () => {
    const { pokemon } = useContext(PokemonContext);
    const { genFilter } = useContext(GlobalContext);
    const [levelUpMoves, setLevelUpMoves] = useState(null);

    useEffect(() => {
        if (pokemon) {
            setLevelUpMoves(
                pokemon.moves
                    .filter(m => m.version_group_details.some(vgd => vgd.move_learn_method.name === "level-up"))
                    .sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1 : -1)
            )
        }
    }, [pokemon, setLevelUpMoves, genFilter])

    const displayLevelUpMoves = () => {
        if (!pokemon || !levelUpMoves)
            return null

        return levelUpMoves.map((move, index) => {
            let details = move.version_group_details.filter(vgd => vgd.version_group.name === genFilter)[0];

            if (details.level_learned_at === 0)
                return null;

            return (
                <PokemonMove types={pokemon.types.map(t => t.type.name)} moveInfo={move} key={index} />
            )
        })
    }

    return (
        <MoveTable>
            <MoveTableHead>
                <MoveTableRow>
                    <MoveTableTitle>Level</MoveTableTitle>
                    <MoveTableTitle>Move</MoveTableTitle>
                    <MoveTableTitle>Type</MoveTableTitle>
                    <MoveTableTitle>Class</MoveTableTitle>
                    <MoveTableTitle>Power</MoveTableTitle>
                    <MoveTableTitle>Acc.</MoveTableTitle>
                    <MoveTableTitle>PP</MoveTableTitle>
                </MoveTableRow>
            </MoveTableHead>
            <MoveTableBody>
                {displayLevelUpMoves()}
            </MoveTableBody>
        </MoveTable>
    )
}

export default PokemonMoves;