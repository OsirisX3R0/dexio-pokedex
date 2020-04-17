import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { light } from './Variables';
import { getTypeColor, getClassTextColor, getClassBackgroundColor } from '../Util/colorHelpers';

export const Pill = styled.span`
    font-size: .75rem;
    border-radius: 1rem;
    text-transform: capitalize;
    margin-right: .25rem;
    padding: .35rem .5rem;
    display: inline-block;
`;

export const Type = styled(Pill)`
    color: ${light};
    background-color: ${props => getTypeColor(props.pokemonType)};
`;

export const Class = styled(Pill)`
    color: ${props => getClassTextColor(props.typeClass)};
    background-color: ${props => getClassBackgroundColor(props.typeClass)};
`;

export const ListTitle = styled.h4`
    text-decoration: underline;
    margin: .75rem 0 .25rem;
`;

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

export const DetailName = styled.h3`
    text-transform: capitalize;
`;