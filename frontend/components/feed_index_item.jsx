import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
        //find the owning user's name and save in state
    }

    
    render() { 
        const message = (this.props.itemType === "route") ?
        ( 
            <li>
                <h3>Placeholder user created the route <Link to="#">{this.props.item.name}</Link> </h3> 
                <p>Distance is {this.props.item.distance} miles</p>
                <p>Made {this.props.item.created_at}</p>
            </li>
        )
        :
        (
            <li>
                <h3>Placeholder user completed a workout of X miles </h3>
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
