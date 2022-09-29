import React from 'react';
import './Activity.css';

const Activity = (props) => {
    // console.log(props.activity);
    const { icon, name, about, time, age } = props.activity;
    return (
        <div className='activity'>

            <img src={icon} alt="" />
            <div className='blog-info'>
                <h1 className='blog-title'>{name}</h1>
                <p>{about}</p>
                <h3>Age: {age} years</h3>
                <h3>Time spend: {time} hours</h3>
            </div>
            <button className='btn-cart'>Add to List</button>

        </div>
    );
};

export default Activity;