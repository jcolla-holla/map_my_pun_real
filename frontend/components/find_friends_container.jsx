import { connect } from 'react-redux';
import { getUsers } from '../actions/users_actions';
import { getRoutes } from '../actions/routes_actions';
import { getWorkouts } from '../actions/workouts_actions';
import { getFriendships } from '../actions/friendship_actions';
import FindFriends from './find_friends';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users),
        friendships: Object.values(state.entities.friendships),
        currentUserId: state.session.id,
        workouts: Object.values(state.entities.workouts),
        routes: Object.values(state.entities.routes)
    }
};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getWorkouts: () => dispatch(getWorkouts()),
    getRoutes: () => dispatch(getRoutes()),
    getFriendships: () => dispatch(getFriendships())
})

export default connect(mapStateToProps, mapDispatchToProps)(FindFriends);