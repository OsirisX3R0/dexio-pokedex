import styled from 'styled-components';
import { getTypeColor } from '../Util/colorHelpers';
import { light, dark } from './Variables';
import { getDamageValueBackground } from '../Util/typeHelpers';

export const ChartContainer = styled.div`
    font-size: 0.75rem;
    overflow: scroll;
    display: grid;
    grid-template-columns: 60px repeat(18, 35px);
    grid-gap: .5rem;
`;

const ChartHeader = styled.div`
    background-color: ${props => getTypeColor(props.pokemonType)};
    color: ${light};
    border-radius: 5px;
    text-transform: capitalize;
    position: sticky;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const ChartHeadCorner = styled.div`
    background-color: ${light};
    text-transform: capitalize;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const ChartDefenseHeader = styled(ChartHeader)`
    top: 0;
`;

export const ChartOffenseHeader = styled(ChartHeader)`
    left: 0;
`;

export const ChartCell = styled.div`
    background-color: ${props => getDamageValueBackground(props.damageValue)};
    color: ${props => (props.damageValue === 1 ? dark : light)};
    border-radius: 5px;
    padding: .25rem;
    display: grid;
    align-items: center;
    justify-content: center;
`;