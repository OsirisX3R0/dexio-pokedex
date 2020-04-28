import React, { useEffect, useState, useContext } from 'react';
import { getType } from '../../Services/typeService';
import { ChartOffenseHeaderCell, ChartHeaderFull, ChartHeader, ChartCell } from '../../Styles/Types';
import { TypeChartContext } from '../../Context/TypeChartContext';

const ChartRow = ({ type }) => {
    const { dual, secondType, allTypes } = useContext(TypeChartContext);
    const [offenseType, setOffenseType] = useState(null);
    const [secondaryType, setSecondaryType] = useState(null);

    useEffect(() => {
        if (!offenseType) {
            getType(type.name)
                .then(res => setOffenseType(res.data))
        }

        if (dual && secondType) {
            getType(secondType)
                .then(res => setSecondaryType(res.data))
        }

        if (!dual)
            setSecondaryType(null);
    }, [offenseType, type, dual, secondType])

    const getDamageValue = defenseType => {
        if ((!dual || !secondaryType) || (secondaryType && offenseType.name === secondaryType.name)) {
            return offenseType.damage_relations.double_damage_to.some(r => r.name === defenseType.name)
                ? 2
                : offenseType.damage_relations.half_damage_to.some(r => r.name === defenseType.name)
                    ? 0.5
                    : offenseType.damage_relations.no_damage_to.some(r => r.name === defenseType.name)
                        ? 0
                        : 1;
        }

        return (
            offenseType.damage_relations.double_damage_to.some(r => r.name === defenseType.name) &&
            secondaryType.damage_relations.double_damage_to.some(r => r.name === defenseType.name)
        )
            ? 4
            : (
                offenseType.damage_relations.double_damage_to.some(r => r.name === defenseType.name) ||
                secondaryType.damage_relations.double_damage_to.some(r => r.name === defenseType.name)
            )
                ? 2
                : (
                    offenseType.damage_relations.half_damage_to.some(r => r.name === defenseType.name) &&
                    secondaryType.damage_relations.half_damage_to.some(r => r.name === defenseType.name)
                )
                    ? 0.25
                    : (
                        offenseType.damage_relations.half_damage_to.some(r => r.name === defenseType.name) ||
                        secondaryType.damage_relations.half_damage_to.some(r => r.name === defenseType.name)
                    )
                        ? 0.5
                        : (
                            offenseType.damage_relations.no_damage_to.some(r => r.name === defenseType.name) ||
                            secondaryType.damage_relations.no_damage_to.some(r => r.name === defenseType.name)
                        )
                            ? 0
                            : 1
    }

    const displayValue = value => {
        return value === 0.5
            ? String.fromCharCode(189)
            : value === 0.25
                ? String.fromCharCode(188)
                : value
    }

    const displayRow = () => {
        if (!type || !allTypes || !offenseType)
            return null

        if (dual && secondaryType) {
            return (
                <>
                    <ChartOffenseHeaderCell>
                        {type.name === secondaryType.name
                            ? <ChartHeaderFull pokemonType={type.name}>{type.name}</ChartHeaderFull>
                            : (
                                <>
                                    <ChartHeader pokemonType={secondaryType.name}>{secondaryType.name.substring(0, 3)}</ChartHeader>
                                    <ChartHeader pokemonType={type.name}>{type.name.substring(0, 3)}</ChartHeader>
                                </>
                            )
                        }
                    </ChartOffenseHeaderCell>
                    {allTypes.map((defenseType, index) => {
                        let value = getDamageValue(defenseType);
                        return <ChartCell damageValue={value} key={index}>{displayValue(value)}</ChartCell>
                    })}
                </>
            )
        }

        return (
            <>
                <ChartOffenseHeaderCell>
                    <ChartHeaderFull pokemonType={type.name}>{type.name}</ChartHeaderFull>
                </ChartOffenseHeaderCell>
                {allTypes.map((defenseType, index) => {
                    let value = getDamageValue(defenseType);
                    return <ChartCell damageValue={value} key={index}>{displayValue(value)}</ChartCell>
                })}
            </>
        )
    }

    return displayRow()
}

export default ChartRow;