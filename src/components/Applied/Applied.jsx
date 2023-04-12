import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AppliedJobs from './AppliedJobs';

const Applied = () => {
    const applyJobs = useLoaderData();
    console.log(applyJobs)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-5'>Applied Jobs</h1>
            <div>
                <select className='rounded-lg p-2 dropdown'>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>
            <div>
                {
                    applyJobs.map(jobs => <AppliedJobs
                        key={jobs.id}
                        jobs={jobs}
                    ></AppliedJobs>)
                }
            </div>
        </div>
    );
};

export default Applied;