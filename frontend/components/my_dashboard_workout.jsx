import React from 'react';
import { Link } from 'react-router-dom';

const MyDashboardWorkout = (props) => {
    return (
        <li className="workoutItem">
            <div>{props.route_completed_map_url}</div>
            <div>{props.workout.name}</div>
            <div>{props.route_completed_distance}</div>
        </li>
    )
}

export default MyDashboardWorkout;