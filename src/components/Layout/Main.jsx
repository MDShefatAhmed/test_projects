import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <div className='bg-sky-50'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;