import React, { createContext } from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalContext = createContext();

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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