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
        font-size: 14px;
        background-color: #f5f5f5;
        color: #333;
    }
`;

export const GlobalProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(null);
    return (
        <GlobalContext.Provider value={{
            activePage, 
            setActivePage
        }}>
            <GlobalStyles />
            {children}
        </GlobalContext.Provider>
    )
}