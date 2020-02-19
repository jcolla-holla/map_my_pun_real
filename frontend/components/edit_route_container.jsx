import { connect } from "react-redux";
import EditRoute from "./edit_route";
import {updateRoute, getRoute} from "../actions/routes_actions";


const mapStateToProps = (state, ownProps) => {
    let route = state.entities.routes[ownProps.match.params.id];
    return {
        routeId: ownProps.match.params.id,
        route: route ? route : { activity_type: "", name: "", city: "", user_id: undefined, distance: undefined }
    }
}

const mapDispatchToProps = dispatch => ({
    updateRoute: (route) => dispatch(updateRoute(route)),
    getRoute: (routeId) => dispatch(getRoute(routeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRoute);