import React from 'react';
import { SearchBox, SearchInput } from '../../Styles/Search';

const Search = ({ query, setQuery, search }) => {
    const onChange = e => {
        setQuery(e.target.value);
        search();
    }
    return (
        <SearchBox>
            <SearchInput type="text" placeholder="Search..." value={query} onChange={onChange} />
        </SearchBox>
    )
}

export default Search;