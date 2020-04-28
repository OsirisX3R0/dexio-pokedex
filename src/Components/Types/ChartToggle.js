import React, { useContext } from 'react';
import { TypeChartContext } from '../../Context/TypeChartContext';
import { ChartToggleContainer, ChartToggleSwitch, ChartTypeSelect, ChartTypeOption } from '../../Styles/Types';
import { ToggleInput, ToggleKnob } from '../../Styles/General';

const ChartToggle = () => {
    const { dual, setDual, allTypes, setSecondType } = useContext(TypeChartContext);

    const displayType = () => {
        if (!dual)
            return null

        return (
            <ChartTypeSelect onChange={(e) => setSecondType(e.target.value)}>
                {allTypes.map((type, index) => (
                    <ChartTypeOption key={index} value={type.name}>{type.name}</ChartTypeOption>
                ))}
            </ChartTypeSelect>
        )
    }
    return (
        <ChartToggleContainer>
            <div>
                {displayType()}
            </div>
            <ChartToggleSwitch>
                Single
                <ToggleInput type="checkbox" checked={dual} onChange={(e) => setDual(e.target.checked)} />
                <ToggleKnob />
                Dual
            </ChartToggleSwitch>
        </ChartToggleContainer>
    )
}

export default ChartToggle;