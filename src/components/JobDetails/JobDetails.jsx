import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { addToDb } from '../../utilities/fakedb';
import JobDetail from './JobDetail';

const JobDetails = () => {
    let {jobId} = useParams();
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    let singleData = data.find(single => single.id === jobId)
    let myData = []
    if(singleData){
        myData.push(singleData)
    }
    const handleApplyNow = (Detail) =>{
        addToDb(Detail.id)
    }
    return (
        <div>
            <div className='bg-indigo-50 mt-3 py-8'>
                <h1 className='text-center '>Detail Page</h1>
            </div>
            <div>
                {
                    myData.map(detail => <JobDetail
                    detail={detail}
                    key={detail.id}
                    handleApplyNow={handleApplyNow}
                    ></JobDetail>)
                }
            </div>
        </div>
    );
};

export default JobDetails;