import React, { useContext } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { PokemonContext } from '../../Context/PokemonContext';
import { 
    DamageTable, 
    DamageTableTitle, 
    DamageTableTypes, 
    DamageTableType, 
    DamageTablePower 
} from '../../Styles/Pokemon';
import damagePlaceholder from '../../Placeholders/Pokemon/damagePlaceholder';

const PokemonDamage = () => {
    const { relations, loading } = useContext(PokemonContext);

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
                <ReactPlaceholder ready={!loading} customPlaceholder={damagePlaceholder}>
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
                </ReactPlaceholder>
            )
        }

        return <div></div>
    }

    return displayDamage()
}

export default PokemonDamage;