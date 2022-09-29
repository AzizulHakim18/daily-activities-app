import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Actvities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div className='container'>
            <div className='activity-container'>
                {
                    activities.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
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
                        <button className='info-btn-number'>10s</button>
                        <button className='info-btn-number'>20s</button>
                        <button className='info-btn-number'>30s</button>
                        <button className='info-btn-number'>40s</button>
                        <button className='info-btn-number'>50s</button>
                    </div>
                </div>
                <div>
                    <h1>Exercise Details</h1>
                    <h3>Exercise Time: <input type="text" name="" id="" /></h3>
                    <h3>Break Time: <input type="text" name="" id="" /></h3>
                </div>

                <div>
                    <button className='activity-btn'>Activity Completed</button>
                </div>
            </div>

        </div>
    );
};

export default Actvities;