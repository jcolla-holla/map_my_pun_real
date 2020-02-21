import { connect } from 'react-redux';
import { getWorkout, deleteWorkout } from '../actions/workouts_actions';
import { getRoute } from '../actions/routes_actions';
import WorkoutShow from './workout_show';


//import comments and likes

//I dont think .id here is going to work yet...
const mapStateToProps = (state, ownProps) => {
    let fetchedWorkout = state.entities.routes[state.entities.workouts[ownProps.match.params.id]];
    return {
        workoutId: ownProps.match.params.id,
        workout: (state.entities.workouts[ownProps.match.params.id]) ? (state.entities.workouts[ownProps.match.params.id]) : {route_completed_id: undefined, avg_pace: undefined, user_id: undefined, completed_date: undefined, name: undefined, notes: undefined, duration: undefined},
        route: fetchedWorkout ? state.entities.routes[fetchedWorkout.route_completed_id] : {maps_api_static: ""}
    
    }
    //comments:
    //likes: 
};

const mapDispatchToProps = dispatch => ({
    getWorkout: (workoutId) => dispatch(getWorkout(workoutId)),
    getRoute: (routeId) => dispatch(getRoute(routeId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
