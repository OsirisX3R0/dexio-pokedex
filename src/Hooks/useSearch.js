import { useState, useEffect, useCallback } from "react";

const useSearch = (query, collection) => {
    const [searchQuery, setSearchQuery] = useState(query);
    const [results, setResults] = useState(null);
    const [original, setOriginal] = useState(collection ? [...collection] : []);

    const search = useCallback(() => {
        if (searchQuery === '') {
            setResults(original);
            return;
        }

        let searchResults = [];//collection.filter(i => i.name.indexOf(searchQuery) !== -1);
        collection.forEach(item => {
            if (item.name.indexOf(query) !== -1)
                searchResults.push(item);
        });
        setResults(searchResults);
    }, [searchQuery, original, collection, query])

    useEffect(() => {
        setOriginal(collection)
    }, [collection])

    useEffect(() => {
        setSearchQuery(query);
        search();
    }, [query, search])

    return results;
}

export default useSearch;