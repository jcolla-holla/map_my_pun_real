import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
        //find the owning user's name and save in state
    }

    
    render() { 
        let yrStr = this.props.item.created_at.slice(0, 4);
        let monthStr = this.props.item.created_at.slice(5, 7);
        let dayStr = this.props.item.created_at.slice(8, 10);
        let hoursStr = this.props.item.created_at.slice(11, 13);
        let minStr = this.props.item.created_at.slice(15, 17);
        let secStr = this.props.item.created_at.slice(19, 21);
        let date = new Date(this.props.item.created_at.slice(0, 4), this.props.item.created_at.slice(5, 7), this.props.item.created_at.slice(8, 10));
        let now = new Date();


        debugger
        const card = (this.props.itemType === "route") ?
        ( 
            <li className="routeCard">
                <header>
                    <h3>User #{this.props.item.user_id} created the route <Link to={`/routes/show/${this.props.item.id}`}>{this.props.item.name}</Link> </h3> 
                </header>

                <body>
                    <Link to={`/workouts/show/${this.props.item.id}`}>
                        <div className="mapInCard"></div>
                        <div className="distanceInCard">Distance {this.props.item.distance} miles</div>
                    </Link>
                </body>

                <footer>
                    <p>Made {this.props.item.created_at}</p>
                </footer>
                
            </li>
        )
        :
        (
            <li className="workoutCard">
                <header>
                        <h3>User #{this.props.item.user_id} completed a {this.props.item.activity_type} workout of X miles</h3>
                </header>

                <body>
                    <Link to={`/workouts/show/${this.props.item.id}`}>
                        <div className="mapInCard"></div>
                        <div className="distanceInCard">Distance X miles</div>
                    </Link>
                </body>

                <footer>
                    <p>Made {this.props.item.created_at}</p>
                </footer>
            </li>
        )
    
        return (
            card
        )
    }
    //explore how to get '5 days ago' - https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
}

export default FeedIndexItem;
