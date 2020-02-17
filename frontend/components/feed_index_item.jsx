import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
        //find the owning user's name and save in state
    }

    
    render() { 
        debugger
        const message = (this.props.itemType === "route") ?
        ( 
            <li>
                    {/* hard coded for now to show ID of 1 instead of ${this.props.item.id}, bc item.id is undefined for some reason I can't figure out why */}
                <h3>Placeholder user created the route <Link to={`/routes/show/1`}>{this.props.item.name}</Link> </h3> 
                <p>Distance is {this.props.item.distance} miles</p>
                <p>Made {this.props.item.created_at}</p>
            </li>
        )
        :
        (
            <li>
                <h3>Placeholder user completed a workout of X miles</h3>
                <Link to={`/workouts/show/1`}>workout name not rendering yet: {this.props.item.name}</Link>
                <p>Made {this.props.item.created_at}</p>
            </li>
        )
    
        return (
            message
        )
    }
    //explore how to get '5 days ago' - https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
}

export default FeedIndexItem;
