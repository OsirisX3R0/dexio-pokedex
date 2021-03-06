import React from 'react';
import { HomeHead, HomeHeading, HomeNav, HomeLinks, HomeLink, HomeLinkButton } from '../Styles/Home'
import useActivePage from '../Hooks/useActivePage';

const Home = () => {
    useActivePage('Home');

    return (
        <>
            <HomeHead>
                <HomeHeading>Dexio</HomeHeading>
            </HomeHead>

            <HomeNav>
                <HomeLinks>
                    <HomeLink>
                        <HomeLinkButton to="/pokemon/list">Pokedex</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton to="/ability/list">Abilities</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton to="/move/list">Moves</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton to="/type/chart">Type Chart</HomeLinkButton>
                    </HomeLink>
                </HomeLinks>
            </HomeNav>
        </>
    )
}

export default Home;