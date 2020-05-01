import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { TopBarContainerFixed, TopBarContainer, BackButton, BackButtonText, TopBarTitle } from '../../Styles/Layout';
import { GlobalContext } from '../../Context/GlobalContext';

const Topbar = ({ history }) => {
    const { activePage } = useContext(GlobalContext);

    const displayBar = () => {
        if (activePage === 'Type Chart') {
            return (
                <TopBarContainerFixed>
                    <TopBarTitle>
                        <BackButton onClick={() => history.goBack()}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                            <BackButtonText>{activePage}</BackButtonText>
                        </BackButton>
                    </TopBarTitle>
                </TopBarContainerFixed>
            )
        }

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

    return displayBar()
}

export default Topbar;