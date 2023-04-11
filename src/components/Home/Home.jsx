import React from 'react';
import Headers from '../../HomePage/Headers/Headers'
import Category from '../../HomePage/Category/Category';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Headers></Headers>
            <Category></Category>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;