import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPokemon } from '../../Services/pokemonService';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import { 
    PokemonDetailHeader, 
    PokemonSprite, 
    PokemonDetailInfo, 
    PokemonDetailName, 
    PokemonDetailNumber, 
    PokemonDetailSize,
    PokemonDetailAbilityList,
    PokemonDetailAbility, 
    PokemonTypes,
    Type,
    Stats,
    StatName,
    StatValue,
    StatBar
} from '../../Styles/Pokemon';
import { Container } from '../../Styles/Layout';

const Pokemon = ({ history }) => {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [statTotal, setStatTotal] = useState(null);
    useActivePage('Pokemon Detail');

    useEffect(() => {
        getPokemon(id)
            .then(res => {
                setPokemon(res.data);
                setStatTotal(res.data.stats
                    .map(s => s.base_stat)
                    .reduce((total, next) => total + next))
            })
    }, [])

    const getBaseStat = stat => {
        return pokemon.stats
            .filter(s => s.stat.name === stat)[0].base_stat;
    }

    const displayPokemon = () => {
        if (pokemon) {
            return (
                <Layout history={history}>
                    <Container>
                        <PokemonDetailHeader>
                            <PokemonSprite src={pokemon.sprites.front_default} />
                            <PokemonDetailInfo>
                                <PokemonDetailName>{pokemon.name}</PokemonDetailName>
                                <PokemonDetailNumber>No. {pokemon.order}</PokemonDetailNumber>
                                <PokemonDetailSize>{pokemon.height / 10}m, {pokemon.weight / 10}kg</PokemonDetailSize>
                                <PokemonDetailAbilityList>
                                    Abilities: &nbsp;
                                    {pokemon.abilities
                                        .filter(a => !a.is_hidden)
                                        .map((ability, abilityIndex) => {
                                            return (
                                                <PokemonDetailAbility key={abilityIndex}>
                                                    {ability.ability.name}
                                                    {abilityIndex === pokemon.abilities.length - 1 ? '' : ', '}
                                                </PokemonDetailAbility>)
                                    })}

                                    {pokemon.abilities
                                        .filter(a => a.is_hidden)
                                        .map((ability, abilityIndex) => (
                                            <PokemonDetailAbility key={abilityIndex} hiddenAbility>
                                                {ability.ability.name} (Hidden)
                                            </PokemonDetailAbility>
                                    ))}
                                </PokemonDetailAbilityList>
                                <PokemonTypes>
                                    {pokemon.types.map((type, typeIndex) => (
                                        <Type key={typeIndex} pokemonType={type.type.name}>
                                            {type.type.name}
                                        </Type>
                                    ))}
                                </PokemonTypes>
                            </PokemonDetailInfo>
                        </PokemonDetailHeader>

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
                    </Container>
                </Layout>
            )
        }

        return <div></div>
    }

    return displayPokemon()
}

export default Pokemon;