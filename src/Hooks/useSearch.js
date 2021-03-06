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

        let searchResults = collection.filter(i => i.name.includes(searchQuery));
        setResults(searchResults);
    }, [searchQuery, collection, original])

    useEffect(() => {
        setOriginal(collection)
    }, [collection])

    useEffect(() => {
        setSearchQuery(query.toLowerCase());
        search();
    }, [query, search])

    return results;
}

export default useSearch;