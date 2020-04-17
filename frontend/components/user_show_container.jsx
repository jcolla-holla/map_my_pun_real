import { connect } from 'react-redux';
import { getUsers } from '../actions/users_actions';
import { getRoutes } from '../actions/routes_actions';
import { getWorkouts } from '../actions/workouts_actions';
import { createFriendship } from '../actions/friendship_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        userId: ownProps.match.params.id,
        users: state.entities.users
}};

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    getWorkouts: () => dispatch(getWorkouts()),
    getRoutes: () => dispatch(getRoutes()),
    createFriendship: (friendship) => dispatch(createFriendship(friendship))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

    // user: state.entities.users[state.entities.users[ownProps.match.params.id]]
    // return {
    //     workoutId: ownProps.match.params.id,
    //     workout: (state.entities.workouts[ownProps.match.params.id]) ? (state.entities.workouts[ownProps.match.params.id]) : { route_completed_id: undefined, avg_pace: undefined, user_id: undefined, completed_date: undefined, name: undefined, notes: undefined, duration: undefined },
    //     route: fetchedWorkout ? state.entities.routes[fetchedWorkout.route_completed_id] : { maps_api_static: "" }

    // }