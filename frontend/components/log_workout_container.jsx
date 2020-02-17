import LogWorkout from './log_workout';
import { connect } from "react-redux";
import { createWorkout } from '../actions/workouts_actions'
import {getRoute, getRoutes} from '../actions/routes_actions';

const mapStateToProps = (state) => {
    return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.workouts,
    routes: state.entities.routes,
    workout: { route_completed_id: "", route: undefined, avg_pace: "", user_id: state.entities.users[state.session.id].id, completed_date: undefined, name: "", notes: "", duration: undefined }
    }

    
};

const mapDispatchToProps = dispatch => {
    return {
    createWorkout: (workout) => dispatch(createWorkout(workout)),
    getRoute: (routeId) => dispatch(getRoute(routeId)),
    getRoutes: () => dispatch(getRoutes())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LogWorkout);