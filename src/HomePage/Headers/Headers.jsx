import React, { useEffect, useState } from 'react';
import './Headers.css';
import Banner from './Banner';
const Headers = () => {
    const [bannerImg, setBannerImg] = useState([]);
    useEffect(() =>{
        fetch('img.json')
        .then(res => res.json())
        .then(data => setBannerImg(data))
    }, [])
    return (
        <div className='bg-indigo-50 mt-3'>
            <div className='md:flex items-center mx-24 '>
                <div className='banner-content'>
                    <p className='text-5xl   font-semibold mb-5'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></p>
                    <p className='mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-indigo-400 text-white p-4 rounded-xl'>Get Started</button>
                </div>
                <div>
                    {
                        bannerImg.map(banner => <Banner
                        key={banner.id}
                        banner={banner}
                        ></Banner>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Headers;