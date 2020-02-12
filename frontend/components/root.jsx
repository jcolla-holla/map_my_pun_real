import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

//Root could be a function
class Root extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {sessionId: this.props.store.getState().session.id}

        // debugger
        // // sessionId stores if there is a session or not
        // let sessionId = this.props.store.getState().session.id;
        // debugger
    }


    //maybe include in render to pass sessionId to the App:
    // <App sessionId={sessionId} />

    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <HashRouter>
                        <App/>
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}

export default Root;