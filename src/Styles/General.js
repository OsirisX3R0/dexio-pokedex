import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
    list-style-type: none;
`;

export const ListItem = styled.li`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ListName = styled(Link)`
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