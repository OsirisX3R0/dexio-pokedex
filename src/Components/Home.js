import React from 'react';
import { HomeHead, HomeHeading, HomeNav, HomeLinks, HomeLink, HomeLinkButton } from './Styles'

const Home = () => {
    return (
        <>
            <HomeHead>
                <HomeHeading>Dexio</HomeHeading>
            </HomeHead>

            <HomeNav>
                <HomeLinks>
                    <HomeLink>
                        <HomeLinkButton>Button</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton>Button</HomeLinkButton>
                    </HomeLink>
                    <HomeLink>
                        <HomeLinkButton>Button</HomeLinkButton>
                    </HomeLink>
                </HomeLinks>
            </HomeNav>
        </>
    )
}

export default Home;