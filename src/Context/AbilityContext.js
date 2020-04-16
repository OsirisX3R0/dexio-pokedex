import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import BlockUi from 'react-block-ui';
import Loader from 'react-loaders';
import { getAbility } from '../Services/abilityService';

export const AbilityContext = createContext();

export const AbilityProvider = ({ children }) => {
    let { name } = useParams();
    const [ability, setAbility] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAbility(name)
            .then(res => setAbility(res.data))
            .finally(() => setLoading(false))
    })

    return (
        <AbilityContext.Provider value={{
            name,
            ability
        }}>
            <BlockUi blocking={loading} loader={<Loader type="ball-grid-pulse" />}>
                {children}
            </BlockUi>
        </AbilityContext.Provider>
    )
}