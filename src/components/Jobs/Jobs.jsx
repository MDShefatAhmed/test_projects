import React, { useEffect, useState } from 'react';
import './Jobs.css';
import Job from './Job';
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-bold text-3xl'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='jobs-container md:grid grid-cols-2'>
                {
                   jobs.map(job => <Job
                   key={job.id}
                   job={job}
                   ></Job>) 
                }
            </div>
        </div>
    );
};

export default Jobs;