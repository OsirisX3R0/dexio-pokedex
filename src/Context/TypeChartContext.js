import React, { createContext, useState, useEffect } from "react";
import { getAllTypes } from "../Services/typeService";

export const TypeChartContext = createContext();

export const TypeChartProvider = ({ children }) => {
    const [allTypes, setAllTypes] = useState([]);

    useEffect(() => {
        getAllTypes()
            .then(res => setAllTypes(
                res.data.results
                    .filter(t => t.name !== 'unknown' && t.name !== 'shadow')
            ))
    }, [])

    return (
        <TypeChartContext.Provider value={{
            allTypes
        }}>
            {children}
        </TypeChartContext.Provider>
    )
}