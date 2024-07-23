import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const ClientLayout = () => {
    return(
        <>
            <Header role='client'/>
            <Outlet/>
        </>
    )
}

export default ClientLayout;