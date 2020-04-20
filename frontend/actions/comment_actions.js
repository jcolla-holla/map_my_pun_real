import * as util from '../util/comments_api_util';
export const RECEIVE_COMMENT = "RECEIEVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIEVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";


const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const createComment = (comment) => dispatch => {
    return util.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const getComments = () => dispatch => {
    return util.getComments()
        .then((comments) => dispatch(receiveComments(comments), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const getComment = (commentId) => dispatch => {
    return util.getComment(commentId)
        .then((comment) => dispatch(receiveComment(comment), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const updateComment = (comment) => dispatch => {
    return util.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment), errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const deleteComment = (commentId) => dispatch => {
    return util.deleteComment(commentId)
        .then((comment) => dispatch(removeComment(comment.id), errors => dispatch(receiveErrors(errors.responseJSON))))
}



