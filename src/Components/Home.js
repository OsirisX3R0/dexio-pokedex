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
                        <HomeLinkButton to="/pokemon">Button</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton to="/pokemon">Button</HomeLinkButton>
                    </HomeLink>
                </HomeLinks>
            </HomeNav>
        </>
    )
}

export default Home;