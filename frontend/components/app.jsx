import React from 'react';
import Footer from './footer';
import Splash from './splash';
import SignUpContainer from './signup_container';
import LoginContainer from './login_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar_container';
import CreateRouteContainer from './create_route_container'
import homeHeader from './home_header';
import LogWorkoutContainer from './log_workout_container';
import importWorkout from './import_workout';
import createGoal from './create_goal';
import RouteShowContainer from './route_show_container';
import WorkoutShowContainer from './workout_show_container';
import RouteEditContainer from './edit_route_container';
import WorkoutEditContainer from './edit_workout_container';

// import FeedIndexContainer from './feed_index_container';
// import MyDashboardContainer from './my_dashboard_container';

import Home from './home';
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


                {/* hacky way of making navbar persist - probably a better way to do this */}
                <div id="homeContainer">
                    <Switch>
                        <ProtectedRoute path="/home" component={homeHeader} />
                        {/* uncomment to SHOw permanently the homeHeader */}
                        {/* <ProtectedRoute path="/createRoute" component={homeHeader} /> */}
                        {/* <ProtectedRoute path="/logWorkout" component={homeHeader} /> */}
                        <ProtectedRoute path="/importWorkout" component={homeHeader} />
                        <ProtectedRoute path="/createGoal" component={homeHeader} />
                        <ProtectedRoute path="/routes/" component={homeHeader} />
                        <ProtectedRoute path="/workouts/" component={homeHeader} />
                        <ProtectedRoute path="/routes/:id" component={RouteShowContainer} />
                        <ProtectedRoute path="/workouts/:id" component={WorkoutShowContainer} />
                    </Switch>
                    {/* loggedInNavOptions */}


                    <ProtectedRoute path="/home" component={Home} />
                    {/* <ProtectedRoute path="/home/my_dashboard" component={MyDashboardContainer} />
                    <ProtectedRoute path="/home/feed" component={FeedIndexContainer}/> */}
                    <ProtectedRoute path="/createRoute" component={CreateRouteContainer}/>
                    <ProtectedRoute path="/logWorkout" component={LogWorkoutContainer} />
                    <ProtectedRoute path="/importWorkout" component={importWorkout} />
                    <ProtectedRoute path="/createGoal" component={createGoal} />
                    <ProtectedRoute path="/routes/:id" component={RouteShowContainer} />
                    <ProtectedRoute path="/workouts/:id" component={WorkoutShowContainer} />
                    <ProtectedRoute path="/workout_edit/:id" component={WorkoutEditContainer} />
                    <ProtectedRoute path="/route_edit/:id" component={RouteEditContainer} />
                </div>
                
                {/* possible cool thing to implement - a blacklist Route path -- doesnt render when path is X*/}
            </div>
        );
    }
}
 
export default App;