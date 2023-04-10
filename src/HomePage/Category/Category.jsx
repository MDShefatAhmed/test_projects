import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const Category = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Job Category List</h1>
                <p className='mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:flex justify-evenly mt-7'>
                {
                    list.map(list => <SingleCategory
                        list={list}
                        key={list.id}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;