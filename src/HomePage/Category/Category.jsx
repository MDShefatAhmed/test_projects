import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const Category = () => {
    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setList(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold italic'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
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