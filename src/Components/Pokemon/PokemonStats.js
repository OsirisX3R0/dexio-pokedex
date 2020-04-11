import React, { useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import {
    Stats,
    StatName,
    StatValue,
    StatBar
} from '../../Styles/Pokemon'

const PokemonStats = () => {
    const { pokemon, statTotal } = useContext(PokemonContext);

    const getBaseStat = stat => {
        return pokemon.stats
            .filter(s => s.stat.name === stat)[0].base_stat;
    }

    const displayStats = () => {
        if (!pokemon)
            return <div></div>
        
        return (
            <Stats>
                <StatName>HP</StatName>
                <StatValue>{getBaseStat('hp')}</StatValue>
                <StatBar statValue={getBaseStat('hp')} statMax="255" pokemonStat="hp" />
                <StatName>Attack</StatName>
                <StatValue>{getBaseStat('attack')}</StatValue>
                <StatBar statValue={getBaseStat('attack')} statMax="255" pokemonStat="attack" />
                <StatName>Defense</StatName>
                <StatValue>{getBaseStat('defense')}</StatValue>
                <StatBar statValue={getBaseStat('defense')} statMax="255" pokemonStat="defense" />
                <StatName>Sp. Attack</StatName>
                <StatValue>{getBaseStat('special-attack')}</StatValue>
                <StatBar statValue={getBaseStat('special-attack')} statMax="255" pokemonStat="special-attack" />
                <StatName>Sp. Defense</StatName>
                <StatValue>{getBaseStat('special-defense')}</StatValue>
                <StatBar statValue={getBaseStat('special-defense')} statMax="255" pokemonStat="special-defense" />
                <StatName>Speed</StatName>
                <StatValue>{getBaseStat('speed')}</StatValue>
                <StatBar statValue={getBaseStat('speed')} statMax="255" pokemonStat="speed" />
                <StatName>Total</StatName>
                <StatValue>{statTotal}</StatValue>
            </Stats>
        )
    }

    return displayStats();
}

export default PokemonStats;