import React from 'react';
import { SearchBox, SearchInput, SearchClear } from '../../Styles/Search';

const Search = ({ query, setQuery }) => {
    const onChange = e => {
        setQuery(e.target.value);
    }

    const showClear = () => {
        if (!query)
            return null

        return <SearchClear onClick={() => setQuery('')}>X</SearchClear>
    }

    return (
        <SearchBox>
            <SearchInput type="text" placeholder="Search..." value={query} onChange={onChange} />
            {showClear()}
        </SearchBox>
    )
}

export default Search;