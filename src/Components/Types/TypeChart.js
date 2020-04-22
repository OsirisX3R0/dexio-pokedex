import React from 'react';
import useActivePage from '../../Hooks/useActivePage';
import Layout from '../Layout/Layout';
import { TypeChartProvider } from '../../Context/TypeChartContext';
import Chart from './Chart';
import { Container } from '../../Styles/Layout';

const TypeChart = ({ history }) => {
    useActivePage('Type Chart');

    return (
        <TypeChartProvider>
            <Layout history={history}>
                <Container>
                    <Chart />
                </Container>
            </Layout>
        </TypeChartProvider>
    )
}

export default TypeChart;