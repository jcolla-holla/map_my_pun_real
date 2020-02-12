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
                    <App />
                </Provider>
            </div>
        )
    }
}

export default Root;