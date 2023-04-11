import React from 'react';
import './Jobdetail.css';
const JobDetail = ({ detail }) => {
    const { job_description, job_responsibility, educational_requirements, experiences, salary, title, phone, email, location} = detail;
    return (
        <div className='JobDetail-container mt-8'>
            <div>
                <div className='mb-5'>
                    <h1 className='font-bold'>Job Description:</h1>
                    <p>{job_description}</p>
                </div>
                <div className='mb-5'>
                    <h1 className='font-bold'>Job Responsibility:</h1>
                    <p>{job_responsibility}</p>
                </div>
                <div className='mb-5'>
                    <h1 className='font-bold'>Educational Requirements:</h1>
                    <p>{educational_requirements}</p>
                </div>
                <div className='mb-5'>
                    <h1 className='font-bold'>Experience:</h1>
                    <p>{experiences}</p>
                </div>
            </div>
            <div className='side-container'>
                <div className='bg-indigo-50 p-5 rounded card rounded-none'>
                    <h1 className='font-bold mb-3'>Job Details</h1>
                    <hr className='border border-indigo-400' />
                    <p className='mt-3 mb-1'><span className='font-bold'> <span className='text-indigo-500 border border-indigo-500 px-1 rounded-full'>$</span> Salary:</span> {salary} (per month)</p>
                    <p className='mb-3'><span className='font-bold'><i className="fa-regular fa-calendar-days text-indigo-500"> </i> Job Title:</span> {title}</p>
                    <h1 className='font-bold mb-3'>Contact Information</h1>
                    <hr className='border border-indigo-400' />
                    <p className='mt-3'><span className='font-bold'><i className="fa-solid fa-phone text-indigo-500"></i> Phone:</span> {phone}</p>
                    <p><span className='font-bold'><i className="fa-regular fa-envelope text-indigo-500"></i> Email:</span> {email}</p>
                    <p><span className='font-bold'> <i className="fa-solid fa-location-dot text-indigo-400"></i>Address:</span> {location}</p>
                </div>
                    <div className='bg-white'>
                        <button className='bg-indigo-400 py-2 mt-3 text-white btn-apply-now'>Apply Now</button>
                    </div>
            </div>
        </div>
    );
};

export default JobDetail;