import * as util from '../util/routes_api_util';
export const RECEIVE_ROUTE = "RECEIEVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIEVE_ROUTES";
export const REMOVE_ROUTE = "REMOVE_ROUTE";


const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
})

const receiveRoutes = (routes) => ({
    type: RECEIVE_ROUTES,
    routes
})

const removeRoute = (routeId) => ({
    type: RECEIVE_ROUTES,
    routeId
})

export const createRoute = (route) => dispatch => {
    return util.createRoute(route)
        .then( (route) => dispatch(receiveRoute(route)))
}

export const getRoutes = () => dispatch => {
    return util.getRoutes()
        .then( (routes) => dispatch(receiveRoutes(routes)))
}

export const getRoute = (routeId) => dispatch => {
    return util.getRoute(routeId)
        .then( (route) => dispatch(receiveRoute(route)))
}

export const updateRoute = (route) => dispatch => {
    return util.getRoute(route)
        .then( (route) => dispatch(receiveRoute(route)))
}

export const deleteRoute = (routeId) => dispatch => {
    return util.getRoute(routeId)
        .then( (route) => dispatch(removeRoute(route.id)))
}

