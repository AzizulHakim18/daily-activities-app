import React from 'react';
import './Activity.css';

const Activity = (props) => {
    // console.log(props.activity);
    const { icon, name, about, time } = props.activity;
    return (
        <div className='activity'>

            <img src={icon} alt="" />
        </div>
    );
};

export default Activity;