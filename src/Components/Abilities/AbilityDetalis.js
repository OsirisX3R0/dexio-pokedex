import React, { useContext } from 'react';
import { AbilityContext } from '../../Context/AbilityContext';
import { GlobalContext } from '../../Context/GlobalContext';
import { 
    AbilityDetailName, 
    AbilityDetailGen, 
    AbilityDetailNum, 
    AbilityDetailDescription,
    AbilityDetailFlavorWithQuotes
 } from '../../Styles/Abilities';
import { formatName } from '../../Util/nameHelpers';

const AbilityDetails = () => {
    const { ability } = useContext(AbilityContext);
    const { genFilter } = useContext(GlobalContext);

    const displayDetails = () => {
        if (!ability)
            return null
        
        let [generation, number] = ability.generation.name.split("-");
        let description = ability.effect_entries[0].effect;
        let flavorText = ability.flavor_text_entries
            .filter(fte => 
                fte.language.name === "en" && 
                fte.version_group.name === genFilter
            )[0].flavor_text;

        return (
            <>
                <AbilityDetailName>{formatName(ability.name)}</AbilityDetailName>
                <AbilityDetailGen>
                    Introduced in {generation}&nbsp;
                    <AbilityDetailNum>{number}</AbilityDetailNum>
                </AbilityDetailGen>
                <AbilityDetailFlavorWithQuotes>{flavorText}</AbilityDetailFlavorWithQuotes>
                <AbilityDetailDescription>{description}</AbilityDetailDescription>
            </>
        )
    }

    return displayDetails()
}

export default AbilityDetails;