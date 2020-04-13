import React, { useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';

const PokemonMoves = () => {
    const { pokemon } = useContext(PokemonContext);

    const displayLevelUpMoves = () => {
        if (!pokemon)
            return <li></li>

        return pokemon.moves
            .filter(m => m.version_group_details.some(vgd => vgd.move_learn_method.name === "level-up"))
            .sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1 : -1)
            .map((move, index) => (
                <li key={index}>{move.move.name} ({move.version_group_details[0].level_learned_at})</li>
            ))
    }

    return (
        <ul>
            {displayLevelUpMoves()}
        </ul>
    )
}

export default PokemonMoves;