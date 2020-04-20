import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import workoutsReducer from './workouts_reducer';
import routesReducer from './routes_reducer';
import { friendshipsReducer } from './friendships_reducer';
import { commentsReducer } from './comments_reducer';
import { likesReducer } from './likes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    routes: routesReducer,
    friendships: friendshipsReducer,
    comments: commentsReducer,
    likes: likesReducer
});

export default entitiesReducer;