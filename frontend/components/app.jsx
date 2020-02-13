import React from 'react';
import Footer from './footer';
import Splash from './splash';
import SignUpContainer from './signup_container';
import LoginContainer from './login_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import FeedIndexContainer from './feed_index_container';
import NavBarContainer from './navbar_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div id="appContainer">
                <NavBarContainer />
                <Route exact path="/" component={Splash}/>
                <Switch>
                    <AuthRoute exact path="/signup" component={SignUpContainer}/>
                    <AuthRoute exact path="/login" component={LoginContainer} />
                    <Route path="/" component={Footer}/>
                </Switch>


                <ProtectedRoute path="/home" component={FeedIndexContainer}/>
                
                {/* Feed, etc -- everything else */}
                
                {/* possible cool thing to implement - a blacklist Route path -- doesnt render when path is X*/}
            </div>
        );
    }
}
 
export default App;