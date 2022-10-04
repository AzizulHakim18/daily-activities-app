import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Actvities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    const [getTime, setGetTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToCart = (activity) => {
        // console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
        // const getTime = activity.time;
        let getTime = 0;
        for (const time of newCart) {
            // console.log(time.time);
            getTime = getTime + parseInt(time.time);
        }
        console.log(cart);
        setGetTime(getTime);
    }

    return (
        <div className='container'>
            <div className='activity-container'>
                {
                    activities.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                        handleAddToCart={handleAddToCart}
                    ></Activity>)
                }

            </div>




            <div className='details-container'>
                <div><img src="" alt="" />
                    <h1>Azizul Hakim Rony</h1>
                </div>
                <div className='info'>
                    <div className='info-container'><p>75Kg</p>
                        <p>Weight</p>
                    </div>
                    <div className='info-container'><p>5.8inch</p>
                        <p>Height</p>
                    </div>
                    <div className='info-container'><p>25years</p>
                        <p>Age</p></div>
                </div>
                <div><h1>Add a Break</h1>
                    <div className='info-btn'>
                        <button className='btn-number-10'>10s</button>
                        <button className='btn-number-20'>20s</button>
                        <button className='btn-number-30'>30s</button>
                        <button className='btn-number-40'>40s</button>
                        <button className='btn-number-50'>50s</button>
                    </div>
                </div>
                <div>
                    <h1>Today's work Details</h1>
                    <h3>Total work Time: {getTime}</h3>
                    <h3>Break Time:</h3>
                </div>

                <div>
                    <button className='activity-btn' onClick={() => alert("Your Todays work done")}>Activity Completed</button>
                </div>
            </div>

        </div>
    );
};

export default Actvities;