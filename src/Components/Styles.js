import styled from 'styled-components';

let primaryRed = "#ef5350";
let primaryRedHover = "#c62828";
let light = "#ddd";
let dark = "#333";

export const HomeHead = styled.header`
    padding: 2rem;
`;

export const HomeHeading = styled.h1`
    text-align: center;
`;

export const HomeNav = styled.nav`
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const HomeLinks = styled.ul`
    list-style-type: none;
    margin: auto;
    display: grid;
    grid-template-columns: 150px 150px;
    grid-gap: .75rem;
`;

export const HomeLink = styled.li`

`;

export const HomeLinkButton = styled.button`
    width: 100%;
    background-color: ${primaryRed};
    color: ${light};
    border-width: 0;
    border-radius: 5px;
    font-weight: 500;
    padding: .3rem;

    &:hover {
        background-color: ${primaryRedHover};
    }
`;