import { RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE, RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';

const routesErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            return action.errors;
        case RECEIVE_ROUTES:
            return [];
        case RECEIVE_ROUTE:
            return [];
        case REMOVE_ROUTE: 
            return [];
        default:
            return state;
    }
};

export default routesErrorsReducer;