import React, { useEffect, useState } from 'react';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import { Container } from '../../Styles/Layout';
import { PokemonProvider } from '../../Context/PokemonContext';
import PokemonDetails from './PokemonDetails';
import PokemonStats from './PokemonStats';
import PokemonDamage from './PokemonDamage';

const Pokemon = ({ history }) => {
    useActivePage('Pokemon Detail');

    return (
        <PokemonProvider>
            <Layout history={history}>
                <Container>
                    <PokemonDetails />
                    <PokemonStats />
                    <PokemonDamage />
                </Container>
            </Layout>
        </PokemonProvider>
    )
}

export default Pokemon;