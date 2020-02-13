import * as util from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => dispatch => {
    util.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
    util.logout()
        .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => dispatch => {
    util.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
};

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
}); 