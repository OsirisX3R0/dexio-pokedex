import React from 'react';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import { Container } from '../../Styles/Layout';
import { PokemonProvider } from '../../Context/PokemonContext';
import PokemonDetails from './PokemonDetails';
import PokemonStats from './PokemonStats';
import PokemonDamage from './PokemonDamage';
import PokemonMoves from './PokemonMoves';

const Pokemon = ({ history }) => {
    useActivePage('Pokemon Detail');

    return (
        <Layout history={history}>
            <PokemonProvider>
                <Container>
                    <PokemonDetails />
                    <PokemonStats />
                    <PokemonDamage />
                    <PokemonMoves />
                </Container>
            </PokemonProvider>
        </Layout>
    )
}

export default Pokemon;