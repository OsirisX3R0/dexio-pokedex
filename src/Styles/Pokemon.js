import styled from 'styled-components';
import { gray, dark, light } from './Variables';
import { getTypeColor, getStatColor, getStatBorderColor, getClassBackgroundColor, getClassTextColor } from '../Util/colorHelpers';
import { List, ListItem, ListName, DetailName } from './General';

export const PokemonInfo = styled.div``;

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

export const PokemonDetailName = styled(DetailName)``;

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

export const StatTotal = styled.div`
    font-weight: bold;
    font-style: italic;
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
    grid-gap: .5rem;
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
    width: 13px;
    height: 13px;
    background-color: ${light};
    color: ${dark};
    font-size: .5rem;
    border-radius: 50%;
    text-transform: none;
    padding: .1rem;
`;

export const MoveTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const MoveTableHead = styled.thead`

`;

export const MoveTableRow = styled.tr`

`;

export const MoveTableTitle = styled.th`
    border-bottom: 2px solid ${gray};
    text-align: left;
`;

export const MoveTableBody = styled.tbody`

`;

export const MoveTableCell = styled.td`
    border-bottom: 1px solid ${gray};
    text-align: center;
    text-transform: capitalize;
`;

export const MoveTableName = styled(MoveTableCell)`
    font-weight: ${props => (
        props.types.some(type => type === props.type) && props.typeClass !== "status"
            ? 'bold'
            : 'normal'
    )};
    text-align: left;
`;

export const MoveTableType = styled(MoveTableCell)`
    background-color: ${props => (getTypeColor(props.type))};
    color: ${light};
`;

export const MoveTableClass = styled(MoveTableCell)`
    background-color: ${props => (getClassBackgroundColor(props.typeClass))};
    color: ${props => (getClassTextColor(props.typeClass))};
`;