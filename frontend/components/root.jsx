import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <h3>This is the root component rendering</h3>
                    <App />
                </Provider>
            </div>
        )
    }
}

export default Root;