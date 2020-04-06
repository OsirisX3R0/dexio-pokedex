import styled from 'styled-components';
import { primaryRed, light } from './Variables';

export const TopBarContainer = styled.header`
    width: 100%;
    background-color: ${primaryRed};
    padding: .55rem;
`;

export const BackButton = styled.button`
    background-color: transparent;
    color: ${light};
    border-width: 0;
    font-weight:500;
`;

export const TopBarTitle = styled.h3`
    color: ${light};
`;

export const Container = styled.div`
    padding: 1rem;
`;