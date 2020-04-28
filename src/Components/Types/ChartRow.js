import React, { useEffect, useState, useContext } from 'react';
import { getType } from '../../Services/typeService';
import { ChartOffenseHeaderCell, ChartHeader, ChartCell } from '../../Styles/Types';
import { TypeChartContext } from '../../Context/TypeChartContext';

const ChartRow = ({ type }) => {
    const { allTypes } = useContext(TypeChartContext);
    const [offenseType, setOffenseType] = useState(null);

    useEffect(() => {
        getType(type.name)
            .then(res => setOffenseType(res.data))
    }, [type])

    const getDamageValue = defenseType => {
        return offenseType.damage_relations.double_damage_to.some(r => r.name === defenseType.name)
            ? 2
            : offenseType.damage_relations.half_damage_to.some(r => r.name === defenseType.name)
                ? 0.5
                : offenseType.damage_relations.no_damage_to.some(r => r.name === defenseType.name)
                    ? 0
                    : 1;
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

        return (
            <>
                <ChartOffenseHeaderCell>
                    <ChartHeader pokemonType={type.name}>{type.name}</ChartHeader>
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