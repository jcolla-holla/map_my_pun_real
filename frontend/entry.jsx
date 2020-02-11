import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'
// import {login, logout, signup} from './util/session_api_util';
// import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    // ReactDOM.render(<h1 store={store}>the entry file from React is working</h1> , root);
    ReactDOM.render(<Root store={store} />, root);
})
// window.login = login;
// window.logout = logout;
// window.signup = signup;