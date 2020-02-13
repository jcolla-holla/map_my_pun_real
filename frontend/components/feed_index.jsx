import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        //binding necessary?
    };

    //first fetch - happens once
    componentDidMount () {
        this.props.getRoutes();
    };
    
    //second fetch - happens once
    componentDidUpdate() {
        if (!this.state.loaded) {
            this.setState({loaded: true});
            this.props.getWorkouts();
        }
    };

    //TO DO: combine this.props.routes and this.props.workouts into a single array before mapping and passing to FeedIndexItem
    render() { 
        return (
            <div id="feedIndexContainer">
                <h1>All Activities</h1>
                <ul className="routesIndex">
                    {this.props.routes.map(route => <FeedIndexItem itemType="route" item={route} key={Math.floor(Math.random() * 10000000000)}/>)}
                </ul>
                <ul className="workoutsIndex">
                    {this.props.workouts.map(workouts => <FeedIndexItem itemType="workout" item={workouts} key={Math.floor(Math.random() * 10000000000)}/>)}
                </ul>
            </div>
        );
    };
}
 
export default FeedIndex;

  // return (  
        //     <div id="feedIndexContainer">
        //         <h1>the feed index is rendering</h1>
        //     </div>
        // );