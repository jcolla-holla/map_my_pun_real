import React from 'react';
import FeedIndexItem from './feed_index_item';
import { Link } from 'react-router-dom';


class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        this.workoutOrRoute = this.workoutOrRoute.bind(this);
    };

    //first fetch - routes - happens once
    componentDidMount () {
        this.props.getRoutes();
    };
    
    //second fetch - workouts - happens once
    componentDidUpdate() {
        if (!this.state.loaded) {
            this.setState({loaded: true});
            this.props.getWorkouts();
        }
    };

    //TO DO: combine this.props.routes and this.props.workouts into a single array before mapping and passing to FeedIndexItem
        // better to create another column 'create_timestamp'? to use for this?  Or the 'created_at' column in the DB

    // merge and use callback to calculate when create first

    workoutOrRoute(item) {
        //hacky way of testing if the item is a route or workout by checking if the item has a key that only workouts have
        return item.route_completed_id ? "workout" : "route"
    }


    render() { 
        let mergedIndex = [];
        mergedIndex = mergedIndex.concat(this.props.routes).concat(this.props.workouts);
        mergedIndex.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);


        return (
                <div id="homeFeed">
                    <div id="feedIndexContainer">
                        <h1 className="activityFeedTitle">Activity Feed</h1>
                        <ul className="activitiesIndex">
                        {mergedIndex.map(item => { 
                            debugger
                            <FeedIndexItem itemType={this.workoutOrRoute(item)} item={item} key={this.workoutOrRoute(item)} />})}

                            {/* {this.props.routes.map(route => <FeedIndexItem itemType="route" item={route} key={Math.floor(Math.random() * 10000000000)}/>)}
                            {this.props.workouts.map(workout => <FeedIndexItem itemType="workout" item={workout} key={Math.floor(Math.random() * 10000000000)}/>)} */}
                        </ul>
                    </div>

                    <div id="profileOverview">
                        <div className="flexedTop">
                            <div className="profilePic"></div>
                            <div className="info">
                                <h1>Hello, {this.props.currentUser.name}</h1>
                                <div className="statsCount">
                                    <div className="routesCount">?? Routes</div>
                                <div className="workoutsCount">?? Workouts</div>
                                </div>
                            </div>
                        </div>
                        <div className="actionLinks">
                            <Link className="createRouteButton" to="/createRoute">Create Route</Link>
                            <Link className="logWorkoutButton" to="/logWorkout">Log Workout</Link>
                        </div>
                    </div>
                 </div>
        );
    };
}
 
export default FeedIndex;