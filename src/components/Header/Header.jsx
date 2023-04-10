import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='flex justify-between mx-8 items-center pt-3 header'>
            <h1 className='font-bold text-3xl banner'>BengaLJobs</h1>
            <div className='anchor'>
                <Link to="/">Home</Link>
                <Link to="/statistics" className='text-indigo-500'>Statistics</Link>
                <Link to="/applied-Jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='bg-indigo-400 text-white p-4 rounded-xl btn'>Start Applying</button>
        </nav>
    );
};

export default Header;