import { connect } from 'react-redux';
import {getRoute, deleteRoute} from '../actions/routes_actions';
import RouteShow from './route_show';
import { getUsers } from '../actions/users_actions';
import { getLikes } from '../actions/like_actions';
import { getComments } from '../actions/comment_actions';

//import comments and likes

//I dont think .id here is going to work yet...
const mapStateToProps = (state, ownProps) => {
    return {
        commentsArr: Object.values(state.entities.comments),
        usersArr: state.entities.comments,
        likesArr: Object.values(state.entities.comments),
        routeId: ownProps.match.params.id,
        route: (state.entities.routes[ownProps.match.params.id]) ? (state.entities.routes[ownProps.match.params.id]) : { activity_type: "", name: "", city: "", user_id: undefined, distance: undefined }
    }

    //comments:
    //likes: 
};

const mapDispatchToProps = dispatch => ({
    getRoute: (routeId) => dispatch(getRoute(routeId)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    getUsers: () => dispatch(getUsers()),
    getLikes: () => dispatch(getLikes()),
    getComments: () => dispatch(getComments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
