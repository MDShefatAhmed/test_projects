import React from 'react';

const SingleCategory = (prpos) => {
    const {img, title, subtitle} = prpos.list;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default SingleCategory;