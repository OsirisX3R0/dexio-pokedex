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
    Type} from '../../Styles/Pokemon';

const Pokemon = ({ history }) => {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null)
    useActivePage('Pokemon Detail');
    useEffect(() => {
        getPokemon(id)
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    const displayPokemon = () => {
        if (pokemon) {
            return (
                <Layout history={history}>
                    <PokemonDetailHeader>
                        <PokemonSprite src={pokemon.sprites.front_default} />
                        <PokemonDetailInfo>
                            <PokemonDetailName>{pokemon.name}</PokemonDetailName>
                            <PokemonDetailNumber>No. {pokemon.order}</PokemonDetailNumber>
                            <PokemonDetailSize>{pokemon.height / 10}m, {pokemon.weight / 10}kg</PokemonDetailSize>
                            <PokemonDetailAbilityList>
                                Abilities: 
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
                </Layout>
            )
        }

        return <div></div>
    }

    return displayPokemon()
}

export default Pokemon;