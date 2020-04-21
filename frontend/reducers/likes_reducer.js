import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

export const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    }
}

export default likesReducer;