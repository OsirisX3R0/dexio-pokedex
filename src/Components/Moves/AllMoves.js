import React, { useState, useEffect } from 'react';
import useActivePage from '../../Hooks/useActivePage';
import { getAllMoves } from '../../Services/moveService';
import Layout from '../Layout/Layout';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import useSearch from '../../Hooks/useSearch';
import Search from '../Search/Search';
import { List } from '../../Styles/General';
import MoveItem from './MoveItem';

const AllMoves = ({ history }) => {
    const [allMoves, setAllMoves] = useState(null);
    const [query, setQuery] = useState('');
    const results = useSearch(query, allMoves);
    const [loading, setLoading] = useState(true);
    useActivePage('Moves');

    useEffect(() => {
        getAllMoves()
            .then(res => {
                setAllMoves(
                    res.data.results.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
                )
            })
            .finally(() => setLoading(false))
    }, [])

    const displayPokemonList = () => {
        if (results) {
            return results.map((move, moveIndex) => {
                return <MoveItem name={move.name} key={moveIndex} />
           })
        }

        if (allMoves && allMoves.length > 0) {
            return allMoves.map((move, moveIndex) => {
                 return <MoveItem name={move.name} key={moveIndex} />
            })
        }
    }

    return (
        <Layout history={history}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                <Search query={query} setQuery={setQuery} />
                <List>
                    {displayPokemonList()}
                </List>
            </BlockUi>
        </Layout>
    )
}

export default AllMoves;