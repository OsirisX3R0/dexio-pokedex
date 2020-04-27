import React, { createContext, useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { useParams } from 'react-router';
import { getMove } from '../Services/moveService';
import movePlaceholder from '../Placeholders/movePlaceholder';

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
            <ReactPlaceholder ready={!loading} customPlaceholder={movePlaceholder}>
                {children}
            </ReactPlaceholder>
        </MoveContext.Provider>
    )
}