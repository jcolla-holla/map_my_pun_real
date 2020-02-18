import * as util from '../util/users_api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const getUsers = () => dispatch => {
    return util.getUsers()
        .then((users) => dispatch(receiveUsers(users)), errors => dispatch(receiveErrors(errors.responseJSON)))
}