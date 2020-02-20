import { connect } from "react-redux";
import ProfileOverview from './profile_overview';
import {getRoutes} from '../actions/routes_actions';
import {getWorkouts} from '../actions/workouts_actions';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    routes: state.entities.routes,
    workouts: state.entities.workouts
})

const mapDispatchToProps = dispatch => ({
    getRoutes: () => dispatch(getRoutes()),
    getWorkouts: () => dispatch(getWorkouts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverview);