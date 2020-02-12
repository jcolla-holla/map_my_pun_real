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
        //         <div className="routesIndex">
        //             {this.props.routes.map( route => <PostIndexItem itemType="route" item={route} />)}
        //         </div>
        //         <div className="workoutsIndex">
        //             {this.props.workouts.map( workouts => <PostIndexItem itemType="workout" item={workouts} />)}
        //         </div>
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