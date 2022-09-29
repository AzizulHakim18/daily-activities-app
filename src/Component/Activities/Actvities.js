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
                <h1>you can show details</h1>
            </div>

        </div>
    );
};

export default Actvities;