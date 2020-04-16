import * as util from '../util/friendships_api_util';
export const RECEIVE_FRIENDSHIP = "RECEIEVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIPS = "RECEIEVE_FRIENDSHIPS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS";


const receiveFriendship = (friendship) => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
})

const receiveFriendships = (friendships) => ({
    type: RECEIVE_FRIENDSHIPS,
    friendships
})

const removeFriendship = (friendshipId) => ({
    type: REMOVE_FRIENDSHIP,
    friendshipId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
});

export const createFriendship = (friendship) => dispatch => {
    return util.createFriendship(friendship)
        .then(friendship => dispatch(receiveFriendship(friendship)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getFriendships = () => dispatch => {
    return util.getFriendships()
        .then((friendships) => dispatch(receiveFriendships(friendships), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const getFriendship = (friendshipId) => dispatch => {
    return util.getFriendship(friendshipId)
        .then((friendship) => dispatch(receiveFriendship(friendship), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const updateFriendship = (friendship) => dispatch => {
    return util.updateFriendship(friendship)
        .then((friendship) => dispatch(receiveFriendship(friendship), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const deleteFriendship = (friendshipId) => dispatch => {
    return util.deleteFriendship(friendshipId)
        .then((friendship) => dispatch(removeFriendship(friendship.id), errors => dispatch(receiveErrors(errors.responseJSON))))
}



