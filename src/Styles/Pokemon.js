import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonList = styled.ul`
    list-style-type: none;
`;

export const PokemonListItem = styled.li`
    // display: grid;
    // grid-template-columns: 100px 1fr 60px;
    // grid-gap: .25rem;
`;

export const PokemonListSprite = styled.img`
    width: 100%;
    border: 1px solid black;
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
`;

export const PokemonNumber = styled.span`
    font-style: italic;
`;

export const PokemonTypes = styled.div`

`;

export const Type = styled.span`

`;