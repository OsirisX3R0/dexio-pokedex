import React from 'react';
import useActivePage from '../../Hooks/useActivePage';
import { AbilityProvider } from '../../Context/AbilityContext';
import Layout from '../Layout/Layout';
import { Container } from '../../Styles/Layout';
import AbilityDetails from './AbilityDetalis';
import AbilityPokemonList from './AbilityPokemonList';

const Ability = ({ history }) => {
    useActivePage('Ability Detail');

    return (
        <Layout history={history}>
            <AbilityProvider>
                    <Container>
                        <AbilityDetails />
                        <AbilityPokemonList />
                        <AbilityPokemonList hidden />
                    </Container>
            </AbilityProvider>
        </Layout>
    )
}

export default Ability;