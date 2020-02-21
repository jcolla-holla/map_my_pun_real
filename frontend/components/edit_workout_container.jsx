import { connect } from "react-redux";
import EditWorkout from "./edit_workout";
import { updateWorkout, getWorkout } from "../actions/workouts_actions";


const mapStateToProps = (state, ownProps) => {
    let fetchedWorkout = state.entities.routes[state.entities.workouts[ownProps.match.params.id]];
    return {
        workoutId: ownProps.match.params.id,
        workout: (state.entities.workouts[ownProps.match.params.id]) ? (state.entities.workouts[ownProps.match.params.id]) : { route_completed_id: undefined, avg_pace: undefined, user_id: undefined, completed_date: undefined, name: undefined, notes: undefined, duration: undefined },
        route: fetchedWorkout ? state.entities.routes[fetchedWorkout.route_completed_id] : { maps_api_static: "" }

    }
    //comments:
    //likes: 
};

const mapDispatchToProps = dispatch => ({
    updateWorkout: (workout) => dispatch(updateWorkout(workout)),
    getRoute: (routeId) => dispatch(getRoute(routeId)),
    getWorkout: (workoutId) => dispatch(getWorkout(workoutId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);


