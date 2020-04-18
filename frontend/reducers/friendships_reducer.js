import { RECEIVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

export const friendshipsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_FRIENDSHIPS:
            return action.friendships;
        case RECEIVE_FRIENDSHIP:
            newState[action.friendship.id] = action.friendship;
            return newState;
        case REMOVE_FRIENDSHIP:
            delete newState[action.friendshipId];
            return newState;
        default:
            return oldState;
    }
}

export default friendshipsReducer;