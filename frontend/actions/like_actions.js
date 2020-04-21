import * as util from '../util/likes_api_util';
export const RECEIVE_LIKE = "RECEIEVE_LIKE";
export const RECEIVE_LIKES = "RECEIEVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";


const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
})

const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_LIKE_ERRORS,
    errors
});

export const createLike = (like) => dispatch => {
    return util.createLike(like)
        .then(like => dispatch(receiveLike(like)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getLikes = () => dispatch => {
    return util.getLikes()
        .then((likes) => dispatch(receiveLikes(likes), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const getLike = (likeId) => dispatch => {
    return util.getLike(likeId)
        .then((like) => dispatch(receiveLike(like), errors => dispatch(receiveErrors(errors.responseJSON))))
}

// no need for update b/c there is nothing to update for a like, it either exists or doesn't

export const deleteLike = (likeId) => dispatch => {
    return util.deleteLike(likeId)
        .then((like) => dispatch(removeLike(like.id), errors => dispatch(receiveErrors(errors.responseJSON))))
}



