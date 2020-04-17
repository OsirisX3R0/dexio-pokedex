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
        <MoveProvider>
            <Layout history={history}>
                <Container>
                    <MoveDetails />
                    <MoveStats />
                </Container>
            </Layout>
        </MoveProvider>
    )
}

export default Move;