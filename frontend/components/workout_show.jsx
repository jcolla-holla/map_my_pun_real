import React from 'react';

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger

        // this.props.getWorkout(this.props.workoutId);
        // this.props.getRoute(this.props.workout.route_completed_id);
    }

    render() { 
        return (  
            <div className="workoutShowContainer">
                <h1>WorkoutShow rendered!</h1>
                <h1>Name: {this.props.workout.name}</h1>
                <h2>Duration: {this.props.workout.duration}</h2>
                <h2>Average Page: {this.props.workout.avg_pace}</h2>

                <Link to={`/api/routes/${this.props.workout.route_completed_id}`}>See Route
                    <div>{this.props.route.name}</div>
                    <div>Distance: {this.props.route.distance}</div>
                    <div>map of the route</div>
                </Link>
            </div>
        );
    }
}
 
export default WorkoutShow;