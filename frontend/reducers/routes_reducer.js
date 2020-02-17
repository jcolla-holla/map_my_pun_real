import { RECEIVE_ROUTE, RECEIVE_ROUTES, REMOVE_ROUTE } from '../actions/routes_actions';

export const routesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            newState[action.route.id] = action.route;
            return newState;
        case REMOVE_ROUTE:
            delete newState[action.routeId];
            return newState;
        default:
            return oldState;
    }
}

export default routesReducer;