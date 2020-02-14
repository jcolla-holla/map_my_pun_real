import CreateRoute from './create_route';
import { connect } from "react-redux";
import {createRoute} from '../actions/routes_actions'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route))
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);