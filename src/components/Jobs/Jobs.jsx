import './Jobs.css';
import Job from './Job';
const Jobs = ({jobs}) => {
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-bold text-3xl'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='jobs-container md:grid grid-cols-2'>
                {
                    jobs.slice(0, 4).map(job => <Job
                        job={job}
                        key={job.id}
                    ></Job>)
                }
            </div>
            <button className='bg-sky-300 p-5' id="show-more">Show More</button>
        </div>
    );
};

export default Jobs;


{/*  */ }