import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ReactPlaceholder from 'react-placeholder';
import { getAbility } from '../Services/abilityService';
import abilityPlaceholder from '../Placeholders/abilityPlaceholder';

export const AbilityContext = createContext();

export const AbilityProvider = ({ children }) => {
    let { name } = useParams();
    const [ability, setAbility] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAbility(name)
            .then(res => setAbility(res.data))
            .finally(() => setLoading(false))
    }, [name])

    return (
        <AbilityContext.Provider value={{
            name,
            ability
        }}>
            <ReactPlaceholder ready={!loading} customPlaceholder={abilityPlaceholder} showLoadingAnimation>
                {children}
            </ReactPlaceholder>
        </AbilityContext.Provider>
    )
}