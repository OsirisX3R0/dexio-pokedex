import styled from 'styled-components';
import { primaryRed, light } from './Variables';

export const TopBarContainer = styled.header`
    width: 100%;
    background-color: ${primaryRed};
    padding: .55rem;
`;

export const TopBarTitle = styled.h3`
    color: ${light};
`;