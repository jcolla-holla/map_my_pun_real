import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './util/session_api_util';
import {createRoute} from './util/routes_api_util';
import { getRandomDadJoke, getJokeTest } from './util/jokes_util';


document.addEventListener('DOMContentLoaded', () => {
    window.getRandomDadJoke = getRandomDadJoke;
    window.getJokeTest = getJokeTest;
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
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;

    window.createRoute = createRoute;
    ReactDOM.render(<Root store={store} />, root);
})

//for testing
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;