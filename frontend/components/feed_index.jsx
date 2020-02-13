import React from 'react';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
        //binding necessary?
    }
    render() { 
        //will need to merge the routes and activities and render chronologically at some point
        //ROUGH DRAFT DEPENDS ON STATE WITH ROUTES AND WORKOUTS::
        // return (
        //     <div id="feedIndexContainer">
        //         <h1>All Activities</h1>
        //         <ul className="routesIndex">
        //             {this.props.routes.map( route => <FeedIndexItem itemType="route" item={route} />)}
        //         </ul>
        //         <ul className="workoutsIndex">
        //             {this.props.workouts.map( workouts => <FeedIndexItem itemType="workout" item={workouts} />)}
        //         </ul>
        //     </div>
        // );

        return (  
            <div id="feedIndexContainer">
                <h1>the feed index is rendering</h1>
            </div>
        );
    }
}
 
export default FeedIndex;