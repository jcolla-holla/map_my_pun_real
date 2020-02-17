import { connect } from 'react-redux';
import {getRoute} from '../actions/routes_actions';
import RouteShow from './route_show';

//import comments and likes

//I dont think .id here is going to work yet...
const mapStateToProps = (state, ownProps) => ({
    routeId: ownProps.match.params.id,
    route: state.entities.routes[ownProps.match.params.id],
    user: state.entities.users[ownProps.match.params.user_id]
    //comments:
    //likes: 
});

const mapDispatchToProps = dispatch => ({
    getRoute: (routeId) => dispatch(getRoute(routeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
