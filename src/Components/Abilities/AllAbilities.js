import React, { useState, useEffect } from 'react';
import useActivePage from '../../Hooks/useActivePage';
import useSearch from '../../Hooks/useSearch';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import Search from '../Search/Search';
import AbilityItem from './AbilityItem';
import { AbilityList } from '../../Styles/Abilities';
import { getAllAbilities } from '../../Services/abilityService';
import Layout from '../Layout/Layout';

const AllAbilities = ({ history }) => {
    const [allAbilities, setAllAbilities] = useState([]);
    const [query, setQuery] = useState('');
    const results = useSearch(query, allAbilities, "name");
    const [loading, setLoading] = useState(true);
    useActivePage('Abilities');
    
    useEffect(() => {
        getAllAbilities()
            .then(res => {
                setAllAbilities(
                    res.data.results.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    const displayAbilityList = () => {
        if (results) {
            return results.map((ability, abilityIndex) => {
                return <AbilityItem name={ability.name} key={abilityIndex} />
           })
        }

        if (allAbilities && allAbilities.length > 0) {
            return allAbilities.map((ability, abilityIndex) => {
                 return <AbilityItem name={ability.name} key={abilityIndex} />
            })
        }
    }

    return (
        <Layout history={history}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                <Search query={query} setQuery={setQuery} />
                <AbilityList>
                    {displayAbilityList()}
                </AbilityList>
            </BlockUi>
        </Layout>
    )
}

export default AllAbilities;