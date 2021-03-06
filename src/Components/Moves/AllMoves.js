import React, { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import useActivePage from '../../Hooks/useActivePage';
import { getAllMoves } from '../../Services/moveService';
import Layout from '../Layout/Layout';
import useSearch from '../../Hooks/useSearch';
import Search from '../Search/Search';
import { List } from '../../Styles/General';
import MoveItem from './MoveItem';
import listPlaceholder from '../../Placeholders/listPlaceholder';

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
            <ReactPlaceholder ready={!loading} customPlaceholder={listPlaceholder} showLoadingAnimation>
                <Search query={query} setQuery={setQuery} />
                <List>
                    {displayPokemonList()}
                </List>
            </ReactPlaceholder>
        </Layout>
    )
}

export default AllMoves;