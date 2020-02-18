import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import {getRoutes} from '../actions/routes_actions';
import {getWorkouts} from '../actions/workouts_actions';


const mapStateToProps = (state) => {
    return {
    routesArr: Object.values(state.entities.routes),
    routesObj: state.entities.routes,
    workoutsArr: Object.values(state.entities.workouts),
    currentUser: state.entities.users[state.session.id]
}};

const mapDispatchToProps = dispatch => ({
    getRoutes: () => dispatch(getRoutes()),
    getWorkouts: () => dispatch(getWorkouts())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);