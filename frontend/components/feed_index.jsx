import React from 'react';
import FeedIndexItem from './feed_index_item';
import { Link } from 'react-router-dom';


class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        //binding necessary?
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

    render() { 
        
        return (
            

                <div id="feedIndexContainer">
                    <h1 className="activityFeedTitle">Activity Feed</h1>
                    <ul className="activitiesIndex">
                        {this.props.routes.map(route => <FeedIndexItem itemType="route" item={route} key={Math.floor(Math.random() * 10000000000)}/>)}
                        {this.props.workouts.map(workouts => <FeedIndexItem itemType="workout" item={workouts} key={Math.floor(Math.random() * 10000000000)}/>)}
                    </ul>
                </div>
        );
    };
}
 
export default FeedIndex;