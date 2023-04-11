import './Jobs.css';
import Job from './Job';
import { useEffect, useState } from 'react';
const Jobs = () => {
    const [jobs , setJobs] = useState([]);
    const [showMore , setShowMore] = useState(false);
    const [hideButton, setHideButton] = useState(false);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    const handleButtonClick = () => {
        setShowMore(true);
        setHideButton(true);
      }
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-bold text-3xl'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='jobs-container md:grid grid-cols-2'>
                {
                    jobs.slice(0,showMore ? 6 : 4).map(job => <Job
                        job={job}
                        key={job.id}
                    ></Job>)
                }
            </div>
            <div className='flex justify-center my-5'>
            {hideButton ? null : <button onClick={handleButtonClick} className='bg-indigo-400 p-3 rounded-lg text-white center'>Show More</button>}
            </div>
        </div>
    );
};

export default Jobs;


{/* 
const [jobs , setJobs] = useState([]);
    const [showMore , setShowMore] = useState(false);
    
    setJobs(jobs);  




onClick={setShowMore}
*/ }