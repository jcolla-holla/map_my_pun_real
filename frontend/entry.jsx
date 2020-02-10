import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store'
// import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<h1>the entry file from React is working</h1>, root);

    // ReactDOM.render(<Root store={store} />, root);
})