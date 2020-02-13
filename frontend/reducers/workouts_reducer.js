import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS, REMOVE_WORKOUT} from '../actions/workouts_actions';

export const workoutsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_WORKOUTS:
            return action.workouts;
        case RECEIVE_WORKOUT:
            newState[action.workout.id] = action.workout;
            return newState;
        case REMOVE_WORKOUT:
            delete newState[action.workout.id];
            return newState;
        default:
            return oldState;
    }
}

export default workoutsReducer;