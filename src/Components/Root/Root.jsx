import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidbar from '../Sidbar/Sidbar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
            <Sidbar></Sidbar>
            <Outlet> </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;