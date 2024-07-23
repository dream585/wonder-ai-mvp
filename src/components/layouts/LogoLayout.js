import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const LogoLayout = () => {
    return(
        <>
            <Header role='logo'/>
            <Outlet/>
        </>
    )
}

export default LogoLayout;