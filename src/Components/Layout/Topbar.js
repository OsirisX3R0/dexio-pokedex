import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { TopBarContainer, BackButton, BackButtonText, TopBarTitle } from '../../Styles/Layout';
import { GlobalContext } from '../../Context/GlobalContext';

const Topbar = ({ history }) => {
    const { activePage } = useContext(GlobalContext);

    return (
        <TopBarContainer>
            <TopBarTitle>
                <BackButton onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <BackButtonText>{activePage}</BackButtonText>
                </BackButton>
            </TopBarTitle>
        </TopBarContainer>
    )
}

export default Topbar;