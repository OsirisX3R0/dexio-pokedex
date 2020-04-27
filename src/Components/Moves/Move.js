import React from 'react';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import { Container } from '../../Styles/Layout';
import { MoveProvider } from '../../Context/MoveContext';
import MoveDetails from './MoveDetail';
import MoveStats from './MoveStats';

const Move = ({ history }) => {
    useActivePage('Move Detail');

    return (
        <Layout history={history}>
            <MoveProvider>
                    <Container>
                        <MoveDetails />
                        <MoveStats />
                    </Container>
            </MoveProvider>
        </Layout>
    )
}

export default Move;