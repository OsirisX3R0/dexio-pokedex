import React, { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { List } from '../../Styles/General';
import PokemonItem from './PokemonItem';
import { getAllPokemon } from '../../Services/pokemonService';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import Search from '../Search/Search';
import useSearch from '../../Hooks/useSearch';
import listPlaceholder from '../../Placeholders/AllPokemon';

const AllPokemon = ({ history }) => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [query, setQuery] = useState('');
    const results = useSearch(query, allPokemon);
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
        if (results) {
            return results.map((pokemon, pokemonIndex) => {
                return <PokemonItem name={pokemon.name} key={pokemonIndex} />
           })
        }

        if (allPokemon && allPokemon.length > 0) {
            return allPokemon.map((pokemon, pokemonIndex) => {
                 return <PokemonItem name={pokemon.name} key={pokemonIndex} />
            })
        }
    }

    return (
        <Layout history={history}>
            <ReactPlaceholder ready={!loading} customPlaceholder={listPlaceholder}>
                <Search query={query} setQuery={setQuery} />
                <List>
                    {displayPokemonList()}
                </List>
            </ReactPlaceholder>
        </Layout>
    )
}

export default AllPokemon;