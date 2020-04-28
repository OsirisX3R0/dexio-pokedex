import React, { createContext, useState, useEffect } from "react";
import ReactPlaceholder from 'react-placeholder';
import { getAllTypes } from "../Services/typeService";
import typeChartPlaceholder from "../Placeholders/typeChartPlaceholder";

export const TypeChartContext = createContext();

export const TypeChartProvider = ({ children }) => {
    const [allTypes, setAllTypes] = useState([]);
    const [dual, setDual] = useState(false);
    const [secondType, setSecondType] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTypes()
            .then(res => setAllTypes(
                res.data.results
                    .filter(t => t.name !== 'unknown' && t.name !== 'shadow')
            ))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (dual && !secondType) {
            setSecondType('normal');
        }
    }, [dual, secondType])

    return (
        <TypeChartContext.Provider value={{
            allTypes,
            dual,
            setDual,
            secondType, 
            setSecondType,
            loading
        }}>
            <ReactPlaceholder ready={!loading} customPlaceholder={typeChartPlaceholder} showLoadingAnimation>
                {children}
            </ReactPlaceholder>
        </TypeChartContext.Provider>
    )
}