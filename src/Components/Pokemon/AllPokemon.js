import React, { useState, useEffect } from 'react';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import { PokemonList } from '../../Styles/Pokemon';
import PokemonItem from './PokemonItem';
import { getAllPokemon } from '../../Services/pokemonService';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';

const AllPokemon = ({ history }) => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    useActivePage('Pokemon')

    useEffect(() => {
        getAllPokemon()
            .then(res => {
                setAllPokemon(res.data.results);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    const displayPokemonList = () => {
        if (allPokemon && allPokemon.length > 0) {
            return allPokemon.map((pokemon, pokemonIndex) => {
                 return <PokemonItem name={pokemon.name} key={pokemonIndex} />
            })
        }
    }

    return (
        <Layout history={history}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                <PokemonList>
                    {displayPokemonList()}
                </PokemonList>
            </BlockUi>
        </Layout>
    )
}

export default AllPokemon;