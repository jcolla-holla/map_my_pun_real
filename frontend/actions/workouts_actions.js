import * as util from '../util/workouts_api_util';

export const RECEIVE_WORKOUT = "RECEIEVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIEVE_WORKOUTS";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";

const receiveWorkout = (workout) => ({
    type: RECEIVE_WORKOUT,
    workout
})

const receiveWorkouts = (workouts) => ({
    type: RECEIVE_WORKOUTS,
    workouts
})

const removeWorkout = (workoutId) => ({
    type: RECEIVE_WORKOUTS,
    workoutId
})

export const createWorkout = (workout) => dispatch => {
    return util.createWorkout(workout)
        .then((workout) => dispatch(receiveWorkout(workout)))
}

export const getWorkouts = () => dispatch => {
    return util.getWorkouts()
        .then((workouts) => dispatch(receiveWorkouts(workouts)))
}

export const getWorkout = (workoutId) => dispatch => {
    return util.getWorkout(workoutId)
        .then((workout) => dispatch(receiveWorkout(workout)))
}

export const updateWorkout = (workout) => dispatch => {
    return util.getWorkout(workout)
        .then((workout) => dispatch(receiveWorkout(workout)))
}

export const deleteWorkout = (workoutId) => dispatch => {
    return util.getWorkout(workoutId)
        .then((workout) => dispatch(removeWorkout(workout.id)))
}

