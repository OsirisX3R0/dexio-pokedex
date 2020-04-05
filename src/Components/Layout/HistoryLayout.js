import React from 'react';
import Layout from './Layout';

const HistoryLayout = ({ history, children }) => {
    return (
        <Layout history={history}>
            {children}
        </Layout>
    )
}

export default HistoryLayout;