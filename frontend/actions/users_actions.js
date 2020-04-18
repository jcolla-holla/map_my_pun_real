import * as util from '../util/users_api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = (user) => ({
    type: RECEIVE_USERS,
    user
})

export const getUsers = () => dispatch => {
    return util.getUsers()
        .then((users) => dispatch(receiveUsers(users)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getUser = () => dispatch => {
    return util.getUser()
        .then((user) => dispatch(receiveUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)))
}