import React from 'react';
import { Link } from 'react-router-dom';
import {distanceFromToday} from '../util/date_util';

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
        //find the owning user's name and save in state
    }
    
    render() { 
        let date = new Date(this.props.item.updated_at.slice(0, 4), this.props.item.updated_at.slice(5, 7) - 1, this.props.item.updated_at.slice(8, 10));
        let createdDaysAgo = distanceFromToday(date);
        const card = (this.props.itemType === "route") ?
        ( 
            <li className="routeCard">
                <header>
                        <h3>{this.props.user.first_name} {this.props.user.last_name} created the route <Link className="link" to={`/routes/${this.props.item.id}`}>{this.props.item.name}</Link> </h3> 
                </header>

                <section>
                        <Link className="sectionLink" to={`/routes/${this.props.item.id}`}>
                        <div className="mapInCard">
                                <img src={`${this.props.item.maps_api_static_img}`}/>

                                {/* PLACEHOLDER BELOW: */}
                                {/* <img className="mapImage" src="https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8"/> */}
                                
                            
                                {/* {ENV['google_api_key']} DOES THAT GIVE THE API KEY???*/}
                       
                        
                        </div>
                        <div className="distanceInCard">
                                <h1 className="distanceTitle">Distance</h1> 
                                <span className="distanceContainer">
                                    <div className="distanceValue">{this.props.item.distance}</div> 
                                    <p className="mileTag">mi</p>
                                </span> 
                                
                        </div>
                    </Link>
                </section>

                <footer>
                    <div className="leftSideFooter">
                        <button className="likeButton">Like</button>
                        <button className="commentButton">Comment</button>
                    </div>
                    <div className="daysAgo">{createdDaysAgo}</div>
                </footer>
                
            </li>
        )
        :
        (
            <li className="workoutCard">
                <header>
                        <h3 className="workoutTitle">{this.props.user.first_name} {this.props.user.last_name} completed a {this.props.item.activity_type} workout of {this.props.completedRoute.distance} miles</h3>
                        <h3 className="workoutNotes">{this.props.item.notes}</h3>
                </header>

                <section>
                    <Link className="sectionLink" to={`/workouts/show/${this.props.item.id}`}>

                        <div className="distanceInCard">
                            <h1 className="distanceTitle">Distance</h1>
                            <span className="distanceContainer">
                                <div className="distanceValue">{this.props.completedRoute.distance}</div>
                                <p className="mileTag">mi</p>
                            </span>
                        </div>

                        <div className="avgPaceInCard">
                            <h1 className="avgPaceTitle">Avg Pace</h1>
                            <span className="avgPaceContainer">
                                <div className="avgPaceValue">{this.props.item.avg_pace}</div>
                                <p className="mileTag">mi/hr</p>
                            </span>
                        </div>
                        <div className="mapInCard">
                                <img src={`${this.props.completedRoute.maps_api_static_img}`}/>
                            {/* img placeholder */}
                            {/* <img className="mapImage" src="https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=AIzaSyBrpStMcZ1UILzkqi_eMI2pjTgo7SZmUl8" /> */}
                        </div>

                    </Link>
                </section>

                <footer>
                    <div className="leftSideFooter">
                        <button className="likeButton">Like</button>
                        <button className="commentButton">Comment</button>
                    </div>
                        <div className="daysAgo">{createdDaysAgo}</div>
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
