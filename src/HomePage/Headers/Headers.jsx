import React from 'react';
import './Headers.css';
const Headers = () => {
    return (
        <div>
            <div className='flex items-center mx-24'>
                <div>
                    <p className='text-5xl   font-semibold mb-5'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></p>
                    <p className='mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-indigo-400 text-white p-4 rounded-xl'>Get Started</button>
                </div>
                <div>
                    <img src="./P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Headers;