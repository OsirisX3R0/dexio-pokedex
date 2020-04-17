import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMove } from '../Services/moveService';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';

export const MoveContext = createContext();

export const MoveProvider = ({ children }) => {
    const { name } = useParams();
    const [move, setMove] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMove(name)
            .then(res => setMove(res.data))
            .finally(() => setLoading(false))
    }, [name])

    return (
        <MoveContext.Provider value={{
            name,
            move
        }}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                {children}
            </BlockUi>
        </MoveContext.Provider>
    )
}