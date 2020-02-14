import LogWorkout from './log_workout';
import { connect } from "react-redux";
import { createWorkout } from '../actions/workouts_actions'
import {getRoute} from '../actions/routes_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createWorkout: (workout) => dispatch(createWorkout(workout)),
    getRoute: (routeId) => dispatch(getRoute(routeId))
});


export default connect(mapStateToProps, mapDispatchToProps)(LogWorkout);