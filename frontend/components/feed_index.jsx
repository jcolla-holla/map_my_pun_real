import React from 'react';
import FeedIndexItem from './feed_index_item';
import { Link } from 'react-router-dom';


class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        this.workoutOrRoute = this.workoutOrRoute.bind(this);
    };

    //fetch all necessary data - routes - happens once.
    componentDidMount () {
            this.props.getUsers();
            this.props.getRoutes();
            this.props.getWorkouts();
    };
    

    //hacky way of testing if the item is a route or workout by checking if the item has a key that only workouts have
    workoutOrRoute(item) {
        return item.route_completed_id ? "workout" : "route"
    }

    render() { 
        let mergedIndex = [];
        mergedIndex = mergedIndex.concat(this.props.routesArr).concat(this.props.workoutsArr);
        mergedIndex.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);

        const itemsLis = mergedIndex.map(item => {
            let completedRoute = undefined;
            // let that = this; // ran into google chrome browser bug of 'this' being undefined, that = this is for debuggering
            let that = this;
            if (this.workoutOrRoute(item) === "workout") {
                //terrible N query here bc entities.routes is an array, can potentially fix later with following line:
                                    // completedRoute = this.props.routesObj[item.route_completed_id];


                for (let index = 0; index < this.props.routesArr.length; index++) {
                    if (this.props.routesArr[index].id === item.route_completed_id) {
                        completedRoute = this.props.routesArr[index];
                    }
                }   
            }
            //added item.user_id here

            return <FeedIndexItem user={this.props.users[item.user_id]} completedRoute={completedRoute} itemType={this.workoutOrRoute(item)} item={item} key={this.workoutOrRoute(item) + item.id.toString()} />
        })

        return (
                <div id="homeFeed">
                    <div id="feedIndexContainer">
                        <h1 className="activityFeedTitle">Activity Feed</h1>
                        <ul className="activitiesIndex">
                        {itemsLis}
                        </ul>
                    </div>

                    <div id="profileOverview">
                        <div className="flexedTop">
                            <div className="profilePic"></div>
                            <div className="info">
                            <h1>Hello, {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                            {/* <h1>Hello, NAME PLACEHOLDER</h1> */}
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