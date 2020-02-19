import React from 'react';
import { Link } from 'react-router-dom';


class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getWorkout(this.props.workoutId);
        this.props.getRoute(this.props.workout.route_completed_id);
    }

    handleDelete () {
        this.props.deleteWorkout(this.props.workoutId).then(() => this.props.history.push("/home/feed")).then(alert("Workout Successfully Deleted!"));
    }



    render() { 
        return (  
            <div id="workoutShowContainer">
                <section className="workoutShowInfoCard">
                <title className="workoutShowInfoTitle">{this.props.workout.name}</title>
                <div className="workoutShowInfoBody">
                    <section className="workoutShowMap">
                        <img className="mapImage" src={this.props.route.maps_api_static_img} />
                        {/* <img className="mapImage" /> */}
                    </section>

                    <div className="workoutShowInfo">
                        <h2>Duration: {this.props.workout.duration}</h2>
                        <h2>Average Pace: {this.props.workout.avg_pace}</h2>
                    </div>
                </div>

                <div className="actionButtons">
                    <Link className="editButton" to={`/workout_edit/${this.props.workout.id}`}>Edit</Link>
                    <button onClick={() => this.handleDelete()} className="deleteButton">Delete</button>
                </div>
            </section>

               
            </div>
    




            

        );
    }
}
 
export default WorkoutShow;



//previous version:
                // <h1>Name: {this.props.workout.name}</h1>
                // <h2>Duration: {this.props.workout.duration}</h2>
                // <h2>Average Pace: {this.props.workout.avg_pace}</h2>

                // <Link to={`/api/routes/${this.props.workout.route_completed_id}`}>See Route
                //     <div>{this.props.route.name}</div>
                //     <div>Distance: {this.props.route.distance}</div>
                //     <div>map of the route</div>
                // </Link>