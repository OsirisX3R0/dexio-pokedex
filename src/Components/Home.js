import React from 'react';
import { HomeHead, HomeHeading, HomeNav, HomeLinks, HomeLink, HomeLinkButton } from '../Styles/Home'

const Home = () => {
    return (
        <>
            <HomeHead>
                <HomeHeading>Dexio</HomeHeading>
            </HomeHead>

            <HomeNav>
                <HomeLinks>
                    <HomeLink>
                        <HomeLinkButton to="/pokemon">Button</HomeLinkButton>
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