import { useState } from "react";

const useSearch = (query, collection, property) => {
    const [results, setResults] = useState(null);

    const search = () => {
        setResults(collection.filter(i => i[property].includes(query)))
    }

    return [results, search];
}

export default useSearch;