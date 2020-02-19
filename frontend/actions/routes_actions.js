import * as util from '../util/routes_api_util';
export const RECEIVE_ROUTE = "RECEIEVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIEVE_ROUTES";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";


const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
})

const receiveRoutes = (routes) => ({
    type: RECEIVE_ROUTES,
    routes
})

const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
}); 

export const createRoute = (route) => dispatch => {
    return util.createRoute(route)
        .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getRoutes = () => dispatch => {
    return util.getRoutes()
        .then((routes) => dispatch(receiveRoutes(routes), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const getRoute = (routeId) => dispatch => {
    return util.getRoute(routeId)
        .then((route) => dispatch(receiveRoute(route), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const updateRoute = (route) => dispatch => {
    return util.updateRoute(route)
        .then((route) => dispatch(receiveRoute(route), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const deleteRoute = (routeId) => dispatch => {
    return util.deleteRoute(routeId)
        .then((route) => dispatch(removeRoute(route.id), errors => dispatch(receiveErrors(errors.responseJSON))))
}



