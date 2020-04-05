import React from 'react';
import Topbar from './Topbar';

const Layout = ({ history, children }) => {
    return (
        <>
            <Topbar history={history} />
            {children}
        </>
    )
}

export default Layout;