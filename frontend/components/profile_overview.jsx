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
        
        //Calculate the current user's number of made Workouts
        let numMyWorkouts = 0;
        for (let index = 0; index < this.props.workouts.length; index++) {
            if (this.props.workouts[index].user_id === this.props.currentUser.id) {
                numMyWorkouts += 1;
            }
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
                                Routes</div>
                            <div className="workoutsCount">
                                <p className="numMyWorkouts">{numMyWorkouts}</p>
                                 Workouts</div>
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