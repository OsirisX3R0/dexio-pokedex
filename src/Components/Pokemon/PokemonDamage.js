import React, { useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import { 
    DamageTable, 
    DamageTableTitle, 
    DamageTableTypes, 
    DamageTableType, 
    DamageTablePower 
} from '../../Styles/Pokemon';

const PokemonDamage = () => {
    const { relations } = useContext(PokemonContext);

    const displaySection = section => {
        if(section.length === 0)
            return <DamageTableType>None</DamageTableType>

        return section.map((type, index) => (
            <DamageTableType pokemonType={type.name} key={index}>
                {type.name}
                <DamageTablePower>{displayPower(type.power)}x</DamageTablePower>
            </DamageTableType>
        ))
    }

    const displayPower = power => {
        return power === 0.5 
                ? String.fromCharCode(189) 
                : power === 0.25
                    ? String.fromCharCode(188)
                    : power;
    }
    
    const displayDamage = () => {
        if (relations) {
            return (
                <DamageTable>
                    <DamageTableTitle>Weak To</DamageTableTitle>
                    <DamageTableTypes>
                        {displaySection(relations.weakTo)}
                    </DamageTableTypes>
                    <DamageTableTitle>Resistant To</DamageTableTitle>
                    <DamageTableTypes>
                        {displaySection(relations.resistantTo)}
                    </DamageTableTypes>
                    <DamageTableTitle>Immune To</DamageTableTitle>
                    <DamageTableTypes>
                        {displaySection(relations.immuneTo)}
                    </DamageTableTypes>
                    <DamageTableTitle>Damaged Normally by</DamageTableTitle>
                    <DamageTableTypes>
                        {displaySection(relations.normallyDamaged)}
                    </DamageTableTypes>
                </DamageTable>
            )
        }

        return <div></div>
    }

    return displayDamage()
}

export default PokemonDamage;