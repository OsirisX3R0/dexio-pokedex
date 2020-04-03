import React, { createContext } from "react";
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
        background-color: #f5f5f5;
        color: #333;
    }
`;

export const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{}}>
            <GlobalStyles />
            {children}
        </GlobalContext.Provider>
    )
}