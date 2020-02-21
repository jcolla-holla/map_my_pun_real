import React from 'react';
import { Link } from 'react-router-dom';

class ProfileOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }


    render() { 
        //Calculate the current user's number of made Routes
        let numMyRoutes = 0;
        for (let index = 0; index < this.props.routes.length; index++) {
            if (this.props.routes[index].user_id === this.props.currentUser.id) {
                numMyRoutes += 1;
            }
        }

        //handles the 's' plural or not question
        let routesPlural;
        if (numMyRoutes === 1) {
            routesPlural = "Route";
        } else {
            routesPlural = "Routes";
        }
        
        //Calculate the current user's number of made Workouts
        let numMyWorkouts = 0;
        for (let index = 0; index < this.props.workouts.length; index++) {
            if (this.props.workouts[index].user_id === this.props.currentUser.id) {
                numMyWorkouts += 1;
            }
        }

        let workoutsPlural;
        if (numMyWorkouts === 1) {
            workoutsPlural = "Workout";
        } else {
            workoutsPlural = "Workouts";
        }

        return (  
            <div id="profileOverview">
                <div className="flexedTop">
                    <div className="profilePic"></div>
                    <div className="info">
                        <h1>Hello, {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                        {/* <h1>Hello, NAME PLACEHOLDER</h1> */}
                        <div className="statsCount">
                            <div className="routesCount">
                                <p className="numMyRoutes">{numMyRoutes}</p> 
                                {routesPlural}</div>
                            <div className="workoutsCount">
                                <p className="numMyWorkouts">{numMyWorkouts}</p>
                                {workoutsPlural}</div>
                        </div>
                    </div>
                </div>
                <div className="actionLinks">
                    <Link className="createRouteButton" to="/createRoute">Create Route</Link>
                    <Link className="logWorkoutButton" to="/logWorkout">Log Workout</Link>
                </div>
            </div>
        );
    }
}
 
export default ProfileOverview;