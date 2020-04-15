import React from 'react';
import { Link } from 'react-router-dom';


const homeHeader = (props) => {
    return (
        <header className="homeHeader">
            <Link id="firstNavButton" className="navButton" to="/createRoute">Create Route</Link>
            <Link className="navButton" to="/logWorkout">Log Workout</Link>
            {/* commented these two below out bc the feature does not yet exist */}
            {/* <Link className="navButton" to="/importWorkout">Import Workout</Link> */}
            {/* <Link className="navButton" to="/createGoal">Create A Goal</Link> */}
        </header>
    )
}

export default homeHeader;