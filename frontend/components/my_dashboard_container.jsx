import { connect } from "react-redux";
import MyDashboard from './my_dashboard';
import {getWorkouts} from '../actions/workouts_actions';
import {getRoutes} from '../actions/routes_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    workouts: Object.values(state.entities.workouts),
    routes: Object.values(state.entities.routes)
})

const mapDispatchToProps = dispatch => ({
    getWorkouts: () => dispatch(getWorkouts()),
    getRoutes: () => dispatch(getRoutes())
})


export default connect (mapStateToProps, mapDispatchToProps)(MyDashboard);