import React from 'react';
import { Link } from 'react-router-dom';
const Job = (prpos) => {
    const { img, title, salary, name, job_condition, job_contract, location , id} = prpos.job;
    return (
        <div className='job-container mx-5 mt-5 ps-20 p-10 bg-indigo-50'>
            <img src={img} alt="" />
            <h1 className='font-bold text-2xl'>{title}</h1>
            <h3 className='text-xl'>{name}</h3>
            <div className='flex gap-4 my-3'>
                <p className='p-2 border border-sky-300 rounded'>{job_condition}</p>
                <p className='p-2 border border-sky-300 rounded'>{job_contract}</p>
            </div>
            <div className='flex gap-5'>
                <p><i className="fa-solid fa-location-dot"></i> {location}</p>
                <p><i className="fa-solid fa-dollar-sign border border-neutral-600 p-1 rounded-full"></i> {salary}</p>
            </div>
            <button className='bg-indigo-400 p-3 rounded-lg mt-3 text-white'><Link prpos={prpos} to={`/jobDetails/${id}`}>View Details</Link></button>
        </div>
    );
};

export default Job;

