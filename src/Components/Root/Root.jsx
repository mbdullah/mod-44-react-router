import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidbar from '../Sidbar/Sidbar';
import './Root.css'

const Root = () => {

    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
            <Sidbar></Sidbar>
            {isNavigation && <span>Loading...</span>}
            <Outlet> </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;