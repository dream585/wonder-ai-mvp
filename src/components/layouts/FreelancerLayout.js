import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const FreelancerLayout = () => {
    return(
        <>
            <Header role='freelancer'/>
            <Outlet/>
        </>
    )
}

export default FreelancerLayout;