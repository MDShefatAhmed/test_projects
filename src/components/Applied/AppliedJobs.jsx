import React from 'react';
import './Applieds.css';
import { Link } from 'react-router-dom';
const AppliedJobs = ({ jobs }) => {
    const { img, title, name, job_condition, job_contract, location, salary, id } = jobs;
    return (
        <div className='flex mb-8 items-center applied-job-container p-8 mt-8'>
            <div className='me-5 p-5 apply-job-img'>
                <img src={img} alt="" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h1 className='font-bold mb-1'>{title}</h1>
                    <p>{name}</p>
                    <div className='flex mt-1'>
                        <p className='me-3 border border-indigo-400 text-indigo-400 p-1'>{job_condition}</p>
                        <p className='border border-indigo-400 text-indigo-400 p-1'>{job_contract}</p>
                    </div>
                    <div className='flex mt-1'>
                        <p className='me-7'><i className="fa-solid fa-location-dot"></i>  {location}</p>
                        <p><span className=' border border-black px-1 rounded-full'>$</span> {salary}</p>
                    </div>
                </div>
                <div className='ms-8 btn-apply-jobs'>
                    <button className='bg-indigo-400 text-white p-3 rounded'><Link to={`/jobDetails/${id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;