import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import workoutsReducer from './workouts_reducer';
import routesReducer from './routes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    routes: routesReducer
});

export default entitiesReducer;