import React from 'react';
import './SingleCategory.css';
const SingleCategory = (prpos) => {
    const {img, title, subtitle} = prpos.list;
    return (
        <div className='p-12 bg-sky-50 singles'>
            <img src={img} alt="" />
            <h1 className='font-bold my-1'>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default SingleCategory;