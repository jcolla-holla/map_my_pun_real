import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT, RECEIVE_WORKOUT_ERRORS } from '../actions/workouts_actions';

const workoutsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            return action.errors;
        case RECEIVE_WORKOUTS:
            return [];
        case RECEIVE_WORKOUT:
            return [];
        case REMOVE_WORKOUT:
            return [];
        default:
            return state;
    }
};

export default workoutsErrorsReducer;