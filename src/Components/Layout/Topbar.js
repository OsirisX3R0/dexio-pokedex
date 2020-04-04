import React, { useContext } from 'react';
import { TopBarContainer, TopBarTitle } from '../../Styles/Layout';
import { GlobalContext } from '../../Context/GlobalContext';

const Topbar = () => {
    const { activePage } = useContext(GlobalContext);

    return (
        <TopBarContainer>
            <TopBarTitle>{activePage}</TopBarTitle>
        </TopBarContainer>
    )
}

export default Topbar;