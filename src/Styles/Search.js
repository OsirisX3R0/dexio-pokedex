import styled from 'styled-components';
import { dark, gray } from './Variables';

export const SearchBox = styled.div`
    width: 100%;
    background-color: ${dark};
    padding: .35rem;
    display: grid;
`;

export const SearchInput = styled.input`
    border-width: 0;
    border-radius: 1rem;
    padding: .25rem;
`;

export const SearchClear = styled.button`
    position: absolute;
    right: 15px;
    top: 49px;
    background: transparent;
    border-width: 0;
    color: ${gray};
`;