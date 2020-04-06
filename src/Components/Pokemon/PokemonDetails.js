import React, { useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
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
    Type
} from '../../Styles/Pokemon';

const PokemonDetails = () => {
    const { pokemon, loading } = useContext(PokemonContext);

    const displayDetails = () => {
        if (!pokemon)
            return <div></div>

        return (
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
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
            </BlockUi>
        )
    }

    return displayDetails();
}

export default PokemonDetails;