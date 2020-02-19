import * as util from '../util/workouts_api_util';
export const RECEIVE_WORKOUT = "RECEIEVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIEVE_WORKOUTS";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

const receiveWorkout = (workout) => ({
    type: RECEIVE_WORKOUT,
    workout
})

const receiveWorkouts = (workouts) => ({
    type: RECEIVE_WORKOUTS,
    workouts
})

const removeWorkout = (workoutId) => ({
    type: REMOVE_WORKOUT,
    workoutId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
}); 

export const createWorkout = (workout) => dispatch => {
    return util.createWorkout(workout)
        .then((workout) => dispatch(receiveWorkout(workout)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getWorkouts = () => dispatch => {
    return util.getWorkouts()
        .then((workouts) => dispatch(receiveWorkouts(workouts)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getWorkout = (workoutId) => dispatch => {
    return util.getWorkout(workoutId)
        .then((workout) => dispatch(receiveWorkout(workout)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateWorkout = (workout) => dispatch => {
    return util.getWorkout(workout)
        .then((workout) => dispatch(receiveWorkout(workout)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteWorkout = (workoutId) => dispatch => {
    return util.getWorkout(workoutId)
        .then((workout) => dispatch(removeWorkout(workout.id)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

