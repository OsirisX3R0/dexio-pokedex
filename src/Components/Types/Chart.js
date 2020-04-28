import React, { useContext } from 'react';
import { TypeChartContext } from '../../Context/TypeChartContext';
import ChartRow from './ChartRow';
import { ChartHeadCorner, ChartDefenseHeaderCell, ChartHeader, ChartContainer } from '../../Styles/Types';

const Chart = () => {
    const { allTypes } = useContext(TypeChartContext);

    const displayHead = () => {
        if (!allTypes)
            return null

        return (
            <>
                <ChartHeadCorner>Defense &gt;<br />Offense v</ChartHeadCorner>
                {allTypes.map((type, index) => (
                    <ChartDefenseHeaderCell key={index}>
                        <ChartHeader pokemonType={type.name}>{type.name.substring(0, 3)}</ChartHeader>
                    </ChartDefenseHeaderCell>
                ))}
            </>
        )
    }

    const displayChart = () => {
        if (!allTypes)
            return null

        return allTypes.map((type, index) => (
            <ChartRow type={type} key={index} />
        ))
    }

    return (
        <ChartContainer>
            {displayHead()}
            {displayChart()}
        </ChartContainer>
    )
}

export default Chart;