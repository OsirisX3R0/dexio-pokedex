import React, { createContext, useState } from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalContext = createContext();

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        background-color: #f5f5f5;
        color: #333;
        // overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
`;

export const GlobalProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(null);
    const [genFilter, setGenFilter] = useState("ultra-sun-ultra-moon");
    return (
        <GlobalContext.Provider value={{
            activePage, 
            setActivePage,
            genFilter, 
            setGenFilter
        }}>
            <GlobalStyles />
            {children}
        </GlobalContext.Provider>
    )
}