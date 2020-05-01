import React from 'react';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import ChartToggle from './ChartToggle';
import Chart from './Chart';
import { TypeChartProvider } from '../../Context/TypeChartContext';
import { Container } from '../../Styles/Layout';

const TypeChart = ({ history }) => {
    useActivePage('Type Chart');

    return (
        <TypeChartProvider>
            <Layout history={history}>
                <Container>
                    <Chart />
                </Container>
                <ChartToggle />
            </Layout>
        </TypeChartProvider>
    )
}

export default TypeChart;