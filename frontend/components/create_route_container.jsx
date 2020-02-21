import CreateRoute from './create_route';
import { connect } from "react-redux";
import {createRoute} from '../actions/routes_actions'

const mapStateToProps = (state) => {
    //this intro to the pun jokes is displayed to the user before being reset by marker drops
    window.joke = "A new pun will appear here for each point on the map you create after the first";

    return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.routes,
    joke: window.joke
    }
};

const mapDispatchToProps = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route))
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);