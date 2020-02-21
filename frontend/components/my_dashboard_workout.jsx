import React from 'react';
import { Link } from 'react-router-dom';

const MyDashboardWorkout = (props) => {
    return (
        <li className="workoutItem">
            <Link to={`/workouts/${props.workout.id}`} className="workoutMap">
                <img className="mapImg" src={`${props.route_completed_map_url}`}/>
            </Link>

            <div className="adjacentRightOfMap">
                <Link to={`/workouts/${props.workout.id}`} className="workoutName">{props.workout.name}</Link>
                <p  className="distanceTitle">Distance</p> 
                <section className="distanceNumberAndMi">
                    <p className="distanceNumber">{props.route_completed_distance}</p>
                    <section className="distanceMi">
                        <p>mi</p>
                    </section>
                </section>
            </div>

            <div className="workoutDuration">
                <p className="durationTitle">DURATION</p>
                <p className="durationValue">{props.workout.duration}</p>
            </div>

            <div className="dateAndActivity">
                <p className="completedDate">{props.workout.completed_date}</p>
                <section className="activityTypeContainer">
                    <p className="activityTypeTitle">Activity:</p>
                    <p className="activityType">{props.route_activity_type}</p>
                </section>
            </div>
        </li>
    )
}

export default MyDashboardWorkout;