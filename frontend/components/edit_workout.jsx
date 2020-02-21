import React from 'react';

class EditWorkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div id="workoutEditContainer">
                <div>Editing a workout not yet ready!</div>
                {/* <section className="workoutShowInfoCard">
                    <title className="workoutShowInfoTitle">{this.props.workout.name}</title>
                    <div className="workoutShowInfoBody">
                        <section className="workoutShowMap">
                            <img className="mapImage" src={this.props.route.maps_api_static_img} />
                            <img className="mapImage" /> 
                            <div>this.props.route.name</div>
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
                </section>  */}
            </div>
         );
    }
}
 
export default EditWorkout;