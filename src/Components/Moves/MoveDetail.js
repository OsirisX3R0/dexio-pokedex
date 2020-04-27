import React, { useContext } from 'react';
import { MoveContext } from '../../Context/MoveContext';
import { GlobalContext } from '../../Context/GlobalContext';
import { 
    MoveDetailContainer,
    MoveDetailLeft,
    MoveDetailRight,
    MoveDetailType,
    MoveDetailClass,
    MoveDetailName, 
    MoveDetailGen, 
    MoveDetailNum, 
    MoveDetailDescription,
    MoveDetailFlavorWithQuotes
 } from '../../Styles/Moves';
import { formatName } from '../../Util/nameHelpers';

const MoveDetails = () => {
    const { move } = useContext(MoveContext);
    const { genFilter } = useContext(GlobalContext);

    const displayDetails = () => {
        if (!move)
            return null

        let [generation, number] = move.generation.name.split("-");
        let description = move.effect_entries[0].effect;
        let flavorText = move.flavor_text_entries
            .filter(fte => 
                fte.language.name === "en" && 
                fte.version_group.name === genFilter
            )[0].flavor_text;

        return (
            <>
                <MoveDetailContainer>
                    <MoveDetailLeft>
                        <MoveDetailType pokemonType={move.type.name}>{move.type.name}</MoveDetailType>
                        <MoveDetailClass typeClass={move.damage_class.name}>{move.damage_class.name}</MoveDetailClass>
                    </MoveDetailLeft>
                    <MoveDetailRight>
                        <MoveDetailName>
                            {formatName(move.name)}
                        </MoveDetailName>
                        <MoveDetailGen>
                            Introduced in {generation}&nbsp;
                            <MoveDetailNum>{number}</MoveDetailNum>
                        </MoveDetailGen>
                    </MoveDetailRight>             
                </MoveDetailContainer>   
                <MoveDetailFlavorWithQuotes>{flavorText}</MoveDetailFlavorWithQuotes>
                <MoveDetailDescription>{description}</MoveDetailDescription>
            </>
        )
    }

    return displayDetails()
}

export default MoveDetails;