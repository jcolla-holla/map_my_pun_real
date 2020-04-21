import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import {getRoutes} from '../actions/routes_actions';
import {getWorkouts} from '../actions/workouts_actions';
import {getUsers} from '../actions/users_actions';
import { getFriendships } from '../actions/friendship_actions';
import { getLikes } from '../actions/like_actions';
import { getComments } from '../actions/comment_actions';


const mapStateToProps = (state) => {
    return {
    routesArr: Object.values(state.entities.routes),
    routesObj: state.entities.routes,
    workoutsArr: Object.values(state.entities.workouts),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    likesArr: Object.values(state.entities.likes),
    commentsArr: Object.values(state.entities.comments),
    friendshipsArr: Object.values(state.entities.friendships)
}};

const mapDispatchToProps = dispatch => ({
    getRoutes: () => dispatch(getRoutes()),
    getWorkouts: () => dispatch(getWorkouts()),
    getUsers: () => dispatch(getUsers()),
    getFriendships: () => dispatch(getFriendships()),
    getLikes: () => dispatch(getLikes()),
    getComments: () => dispatch(getComments())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);