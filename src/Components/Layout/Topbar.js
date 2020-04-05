import React, { useContext } from 'react';
import { TopBarContainer, BackButton, TopBarTitle } from '../../Styles/Layout';
import { GlobalContext } from '../../Context/GlobalContext';

const Topbar = ({ history }) => {
    const { activePage } = useContext(GlobalContext);

    return (
        <TopBarContainer>
            <TopBarTitle>
                <BackButton onClick={() => history.goBack()}>&lt; {activePage}</BackButton>                
            </TopBarTitle>
        </TopBarContainer>
    )
}

export default Topbar;