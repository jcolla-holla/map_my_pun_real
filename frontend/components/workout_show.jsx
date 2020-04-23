import React from 'react';
import { Link } from 'react-router-dom';
import {deleteWorkout} from '../util/workouts_api_util';


class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getWorkout(this.props.workoutId);
        this.props.getComments()
        // this.props.getUsers()
        // this.props.getLikes()

        // below is getting a 404 error - to investigate
        // this.props.getRoute(this.props.workout.route_completed_id);
    }

    handleDelete () {
        deleteWorkout(this.props.workoutId).then(() => this.props.history.push("/home/feed")).then(alert("Workout Successfully Deleted !"));
    }



    render() { 
        // itemComments
        let itemComments = [];

        for (let i = 0; i < this.props.commentsArr.length; i++) {
            if (this.props.workout.id === this.props.commentsArr[i].commntable_id && this.props.commentsArr[i].commntable_type.toLowerCase() === "workout") {
                itemComments.push(this.props.commentsArr[i])
            }
        }

        let commentsList = itemComments.map((comment, idx) => {
                if (comment.user_id === this.props.currentUserId) {
                    return <li className="myComment" key={idx}>
                        <div>{comment.content}</div>
                        {/* <button className="commentDeleteBtn" onClick={() => this.props.deleteComment(comment.id)}>Delete</button> */}
                    </li>
                } else {
                    return <li key={idx}>
                        <div>{comment.content}</div>
                    </li>
                }
        })


        return (  
            <div id="workoutShowContainer">
                <section className="workoutShowInfoCard">
                <title className="workoutShowInfoTitle">{this.props.workout.name}</title>
                <div className="workoutShowInfoBody">
                    <section className="workoutShowMap">
                        {/* commenting these out for now */}
                        {/* <img className="mapImage" src={this.props.route.maps_api_static_img} />
                            <div>{this.props.route.name}</div> */}
                    </section>

                    <div className="workoutShowInfo">
                        <h2 className="nonList">Duration: {this.props.workout.duration}</h2>
                        <h2 className="nonList">Average Pace: {this.props.workout.avg_pace}</h2>
                        <ul className="routeWorkoutsCommentsList">
                            <h2>Comments:</h2>
                            {commentsList}
                        </ul>
                    </div>
                </div>

                <div className="actionButtons">
                    {/* commenting edit workout button out for now */}
                    {/* <Link className="editButton" to={`/workout_edit/${this.props.workout.id}`}>Edit</Link> */}
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