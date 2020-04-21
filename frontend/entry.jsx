import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './util/session_api_util';
// import { createFriendship, getFriendships} from './util/friendships_api_util'; 
// import {createRoute} from './util/routes_api_util';
import {createComment, getComments, deleteComment, updateComment} from './util/comments_api_util';
import {createLike, getLikes, deleteLike} from './util/likes_api_util';
import {deleteWorkout} from './util/workouts_api_util';
import { getRandomDadJoke } from './util/jokes_util';


document.addEventListener('DOMContentLoaded', () => {
    window.getRandomDadJoke = getRandomDadJoke;

    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        // delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.createComment = createComment;
    window.getComments = getComments;
    window.createLike = createLike;
    window.getLikes = getLikes;
    window.deleteLike = deleteLike;
    window.deleteComment = deleteComment;
    window.updateComment = updateComment;
    window.deleteWorkout = deleteWorkout;

    ReactDOM.render(<Root store={store} />, root);
})

//for testing
    // window.createRoute = createRoute;    
    // window.createFriendship = createFriendship;
    // window.getFriendships = getFriendships;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;