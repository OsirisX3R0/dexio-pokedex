import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gray, dark, light } from './Variables';
import { getTypeColor, getStatColor, getStatBorderColor } from '../Util/colorHelpers';

export const PokemonList = styled.ul`
    list-style-type: none;
`;

export const PokemonListItem = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
    text-transform: capitalize;
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

export const DamageTable = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-top: 1rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    grid-gap: 1rem;
`;

export const DamageTableTitle = styled.div`
    font-weight: bold;
    padding: .5rem;
`;

export const DamageTableTypes = styled.div`
    padding: 0 .5rem;
`;

export const DamageTableType = styled(Type)`
    margin-bottom: .25rem;
    padding: .35rem .35rem;
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: .25rem;
    justify-content: space-between;
    align-items: center;
`;

export const DamageTablePower = styled.span`
    background-color: ${light};
    color: ${dark};
    font-size: .5rem;
    border-radius: 50%;
    padding: .25rem;
`;