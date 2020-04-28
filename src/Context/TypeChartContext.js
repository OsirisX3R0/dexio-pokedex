import React, { createContext, useState, useEffect } from "react";
import ReactPlaceholder from 'react-placeholder';
import { getAllTypes } from "../Services/typeService";
import typeChartPlaceholder from "../Placeholders/typeChartPlaceholder";

export const TypeChartContext = createContext();

export const TypeChartProvider = ({ children }) => {
    const [allTypes, setAllTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTypes()
            .then(res => setAllTypes(
                res.data.results
                    .filter(t => t.name !== 'unknown' && t.name !== 'shadow')
            ))
            .finally(() => setLoading(false))
    }, [])

    return (
        <TypeChartContext.Provider value={{
            allTypes,
            loading
        }}>
            <ReactPlaceholder ready={!loading} customPlaceholder={typeChartPlaceholder} showLoadingAnimation>
                {children}
            </ReactPlaceholder>
        </TypeChartContext.Provider>
    )
}