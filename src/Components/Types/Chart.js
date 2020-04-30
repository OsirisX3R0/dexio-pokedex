import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { TypeChartContext } from '../../Context/TypeChartContext';
import ChartRow from './ChartRow';
import { ChartHeadCorner, ChartDefenseHeaderCell, ChartHeader, ChartContainer } from '../../Styles/Types';

const Chart = () => {
    const { allTypes, dual } = useContext(TypeChartContext);

    const displayHead = () => {
        if (!allTypes)
            return null

        return (
            <>
                {dual
                    ? <ChartHeadCorner>
                        Offense <FontAwesomeIcon icon={faAngleRight} size="sm" />
                        Defense <FontAwesomeIcon icon={faAngleDown} size="sm" />
                    </ChartHeadCorner>
                    : <ChartHeadCorner>
                        Defense <FontAwesomeIcon icon={faAngleRight} size="sm" />
                        Offense <FontAwesomeIcon icon={faAngleDown} size="sm" />
                    </ChartHeadCorner>
                }
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