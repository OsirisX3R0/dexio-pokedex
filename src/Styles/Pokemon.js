import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gray, dark, light, typeColors, statColors } from './Variables';

export const PokemonList = styled.ul`
    list-style-type: none;
`;

export const PokemonListItem = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    // display: grid;
    // grid-template-columns: 100px 1fr 60px;
    // grid-gap: .25rem;
`;

export const PokemonInfo = styled.div``;

export const PokemonName = styled(Link)`
    color: #333;
    font-weight: 400;
    text-decoration: none;
    text-transform: capitalize;
    margin-bottom: 0;
    display: block;
    padding: 1rem;

    &:hover {
        background-color: #ebebeb;
    }
    
    &:active {
        background-color: #ddd;
    }
`;

export const PokemonNumber = styled.span`
    font-style: italic;
`;

export const PokemonDetailHeader = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 96px 1fr;
    grid-gap: 1rem;
`;

export const PokemonSprite = styled.img`
    width: 100%;
    border: 1px solid black;
`;

export const PokemonDetailInfo = styled.div`

`;

export const PokemonDetailName = styled.h3`
    text-transform: capitalize;
`;

export const PokemonDetailNumber = styled.div`
    font-size: .8rem;
`;

export const PokemonDetailSize = styled.div`
    font-size: .9rem;
    font-style: italic;
`;

export const PokemonDetailAbilityList = styled.div`
    font-size: .9rem;
`;

export const PokemonDetailAbility = styled.span`
    color: ${props => (props.hiddenAbility ? gray : dark)};
    text-transform: capitalize;
`;

export const PokemonTypes = styled.div`
    margin-top: .2rem;
    text-transform: capitalize;
`;

export const Type = styled.span`
    color: ${light};
    background-color: ${props => getTypeColor(props.pokemonType)};
    font-size: .75rem;
    border-radius: 1rem;
    margin-right: .25rem;
    padding: .35rem .5rem;
    display: inline-block;
`;

export const Stats = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 81px 24px 1fr;
    grid-gap: .25rem;
`;

export const StatName = styled.div`
    font-weight: bold;
`;

export const StatValue = styled.div`

`;

export const StatBar = styled.div`
    width: calc(100% * ${props => (props.statValue / props.statMax)});
    background-color: ${props => (getStatColor(props.pokemonStat))};
    border: 1px solid ${props => (getStatBorderColor(props.pokemonStat))};
`;

const getTypeColor = type => {
    //debugger;
    if (!type) {
        return "#bbb";
    }
    let pokemonType = typeColors.filter(t => t.name === type)[0];
    return pokemonType.color;
}

const getStatColor = stat => {
    if (!stat) {
        return "#bbb";
    }

    let pokemonStat = statColors.filter(s => s.name === stat)[0];
    return pokemonStat.color;
}

const getStatBorderColor = stat => {
    if (!stat) {
        return "#bbb";
    }

    let pokemonStat = statColors.filter(s => s.name === stat)[0];
    return pokemonStat.border;
}