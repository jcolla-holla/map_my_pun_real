import { connect } from 'react-redux';
import { getWorkout } from '../actions/workouts_actions';
import { getRoute } from '../actions/routes_actions';
import WorkoutShow from './route_show';

//import comments and likes

//I dont think .id here is going to work yet...
const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    workoutId: ownProps.match.params.id,
    workout: state.entities.workouts[ownProps.match.params.id],
    user: state.entities.users[ownProps.match.params.user_id]
    }
    // route: state.entities.routes[state.entities.workouts[ownProps.match.params.id]].route_completed_id
    //comments:
    //likes: 
};

const mapDispatchToProps = dispatch => ({
    getWorkout: (workoutId) => dispatch(getWorkout(workoutId)),
    getRoute: (routeId) => dispatch(getRoute(routeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
