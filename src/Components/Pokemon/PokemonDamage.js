import React, { useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import { DamageTable, DamageTableTitle, DamageTableTypes, DamageTableType, DamageTablePower } from '../../Styles/Pokemon';

const PokemonDamage = () => {
    const { relations } = useContext(PokemonContext);
    
    const displayDamage = () => {
        if (relations) {
            return (
                <DamageTable>
                    <DamageTableTitle>Weak To</DamageTableTitle>
                    <DamageTableTypes>
                        {relations.weakTo.map((type, index) => (
                            <DamageTableType pokemonType={type.name} key={index}>
                                {type.name}
                                <DamageTablePower>{type.power}x</DamageTablePower>
                            </DamageTableType>
                        ))}
                    </DamageTableTypes>
                    <DamageTableTitle>Resistant To</DamageTableTitle>
                    <DamageTableTypes>
                        {relations.resistantTo.map((type, index) => (
                            <DamageTableType pokemonType={type.name} key={index}>
                                {type.name}
                                <DamageTablePower>{type.power === 0.5 ? String.fromCharCode(189) : String.fromCharCode(188)}x</DamageTablePower>
                            </DamageTableType>
                        ))}
                    </DamageTableTypes>
                    <DamageTableTitle>Immune To</DamageTableTitle>
                    <DamageTableTypes>
                        {relations.immuneTo.map((type, index) => (
                            <DamageTableType pokemonType={type.name} key={index}>
                                {type.name}
                                <DamageTablePower>{type.power}x</DamageTablePower>
                            </DamageTableType>
                        ))}
                    </DamageTableTypes>
                    <DamageTableTitle>Damaged Normally by</DamageTableTitle>
                    <DamageTableTypes>
                        {relations.normallyDamaged.map((type, index) => (
                            <DamageTableType pokemonType={type.name} key={index}>
                                {type.name}
                                <DamageTablePower>{type.power}x</DamageTablePower>
                            </DamageTableType>
                        ))}
                    </DamageTableTypes>
                </DamageTable>
            )
        }

        return <div></div>
    }

    return displayDamage()
}

export default PokemonDamage;