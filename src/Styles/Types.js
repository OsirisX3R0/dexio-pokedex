import styled from 'styled-components';
import { getTypeColor } from '../Util/colorHelpers';
import { border, light, dark } from './Variables';
import { getDamageValueBackground } from '../Util/typeHelpers';
import { Toggle } from './General';

export const ChartToggleContainer = styled.div`
    height: 43px;
    background-color: ${light};
    border-bottom: ${border};
    margin-bottom: .5rem;
    padding: .5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

export const ChartTypeSelect = styled.select`
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    padding: .25rem;
`;

export const ChartTypeOption = styled.option`
    text-transform: capitalize;
`;

export const ChartToggleSwitch = styled(Toggle)`
    place-self: center flex-end;
`;

export const ChartContainer = styled.div`
    height: 100vh;
    font-size: 0.85rem;
    overflow: scroll;
    display: grid;
    grid-template-columns: 60px repeat(18, 35px);
    grid-gap: .5rem;
`;

export const ChartContainerSmall = styled(ChartContainer)`
    grid-template-columns: 60px repeat(7, 35px);
`;

const ChartHeaderCell = styled.div`
    background-color: ${light};
    text-transform: capitalize;
    display: grid;
    position: sticky;
`;

export const ChartHeader = styled.div`
    background-color: ${props => getTypeColor(props.pokemonType)};
    color: ${light};
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const ChartHeaderFull = styled(ChartHeader)`
    grid-column: 1 / -1;
`;

export const ChartHeadCorner = styled(ChartHeaderCell)`
    grid-template-columns: repeat(2, 1fr);
    gap: 0 .2rem;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const ChartDefenseHeaderCell = styled(ChartHeaderCell)`
    top: 0;
`;

export const ChartOffenseHeaderCell = styled(ChartHeaderCell)`
    grid-template-columns: repeat(2, 50%);
    grid-gap: .1rem;
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