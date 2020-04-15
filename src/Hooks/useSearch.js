import { useState, useEffect, useCallback } from "react";

const useSearch = (query, collection, property) => {
    const [searchQuery, setSearchQuery] = useState(query);
    const [results, setResults] = useState(null);
    const [original, setOriginal] = useState([...collection]);

    const search = useCallback(() => {
        if (searchQuery === '') {
            setResults(original);
            return;
        }
        let searchResults = collection.filter(i => i[property].includes(searchQuery));
        setResults(searchResults);
    }, [searchQuery, collection, original, property])

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