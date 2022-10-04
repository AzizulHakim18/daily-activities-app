import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToCart }) => {
    // console.log(props.activity);
    // const { activity, handleAddToCart } = props
    const { icon, name, about, time, age } = activity;

    // const { handleAddToCart } = props;
    return (
        <div className='activity'>

            <img src={icon} alt="" />
            <div className='blog-info'>
                <h1 className='blog-title'>{name}</h1>
                <p>{about}</p>
                <h3>Age: {age} years</h3>
                <h3>Time spend: {time} hours</h3>
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-cart'>Add to List</button>

        </div>
    );
};

export default Activity;