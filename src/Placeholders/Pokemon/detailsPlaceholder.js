import React from 'react';
import { RectShape, TextRow, TextBlock, RoundShape } from 'react-placeholder/lib/placeholders';
import {
    PokemonDetailHeader,
    PokemonDetailInfo, 
    PokemonDetailName, 
    PokemonDetailNumber, 
    PokemonDetailSize,
    PokemonDetailAbilityList,
    PokemonTypes
} from '../../Styles/Pokemon';

const detailsPlaceholder = (
    <PokemonDetailHeader>
        <RectShape color="gray" style={{width: 94, height: 94}} />
        <PokemonDetailInfo>
            <PokemonDetailName>
                <TextRow color="gray" />
            </PokemonDetailName>
            <PokemonDetailNumber>
                <TextRow color="gray" />
            </PokemonDetailNumber>
            <PokemonDetailSize>
                <TextRow color="gray" />
            </PokemonDetailSize>
            <PokemonDetailAbilityList>
                <TextBlock color="gray" rows={2} />
            </PokemonDetailAbilityList>
            <PokemonTypes>
                <RoundShape color="gray" style={{width: 94}} />
                <RoundShape color="gray" style={{width: 94, marginLeft: '.5rem'}} />
            </PokemonTypes>
        </PokemonDetailInfo>
    </PokemonDetailHeader>
)

export default detailsPlaceholder;