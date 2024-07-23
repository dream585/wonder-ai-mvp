import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const GuestLayout = () => {
    return(
        <>
            <Header role='guest'/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default GuestLayout;