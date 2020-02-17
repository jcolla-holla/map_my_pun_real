import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import {getRoutes} from '../actions/routes_actions';
import {getWorkouts} from '../actions/workouts_actions';


const mapStateToProps = (state) => ({
    routes: Object.values(state.entities.routes),
    workouts: Object.values(state.entities.workouts),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    getRoutes: () => dispatch(getRoutes()),
    getWorkouts: () => dispatch(getWorkouts())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);