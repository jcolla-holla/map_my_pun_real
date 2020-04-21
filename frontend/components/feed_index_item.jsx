import React from 'react';
import { Link } from 'react-router-dom';
import {distanceFromToday} from '../util/date_util';
import { createComment, deleteComment, updateComment } from '../util/comments_api_util';
import { createLike, deleteLike } from '../util/likes_api_util';


class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLikeClick() {
        if (this.props.userLiked) {
            deleteLike(this.props.likeId)
        } else {
            // need to capitalize "workout" to "Workout" (and same for 'route') in order for rails to accept it
            let itemType = this.props.itemType;
            let newItemType = itemType.charAt(0).toUpperCase() + itemType.slice(1);
            createLike({ likeable_id: this.props.item.id, likeable_type: newItemType, user_id: this.props.currentUserId});
        }

        // TO DO: need to force re-render instead
        location.reload();
    }


    
    
    render() { 
        console.log(this.props.commentsArr.length)

        let cardClass;
        
        if (this.props.commentsArr.length > 0) {
            if  (this.props.itemType === "route") {
                cardClass = "cardLi withComments routeCard"
            } else if (this.props.itemType === "workout"){
                cardClass = "cardLi withComments workoutCard"
            }
        } else {
            if (this.props.itemType === "route") {
                cardClass = "cardLi routeCard"
            } else if (this.props.itemType === "workout") {
                cardClass = "cardLi workoutCard"
            }
        }

        let likeMsg;
        if (this.props.likeCount === 1) {
            likeMsg = "like";
        } else {
            likeMsg = "likes";
        }

        let likeBtnText;
        if (this.props.userLiked) {
            likeBtnText = "Unlike";
        } else {
            likeBtnText = "Like";
        }


        let date = new Date(this.props.item.updated_at.slice(0, 4), this.props.item.updated_at.slice(5, 7) - 1, this.props.item.updated_at.slice(8, 10));
        let createdDaysAgo = distanceFromToday(date);
        const card = (this.props.itemType === "route") ?
        ( 

           
            <li className={cardClass}>
                <header>
                        <h3><Link to={`/users/${this.props.user.id}`} className="userName">{this.props.user.first_name} {this.props.user.last_name}</Link> created the route <Link className="link" to={`/routes/${this.props.item.id}`}>{this.props.item.name}</Link> </h3> 
                </header>

                    <section className="routeCardSection">
                        <Link className="sectionLink" to={`/routes/${this.props.item.id}`}>
                        <div className="mapInCard">
                                <img className="mapImage" src={`${this.props.item.maps_api_static_img}`}/>
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
                            <div className="likeCount">{this.props.likeCount} {likeMsg}</div>
                            <button className="likeButton" onClick={() => this.handleLikeClick()}>{likeBtnText}</button>
                    </div>
                    <div className="daysAgo">{createdDaysAgo}</div>
                </footer>
                <ul className="commentsList">
                    {this.props.commentsArr.map((comment,idx) => {
                        // if (idx <= 1) {
                            return <li key={idx}>{comment.content}</li>
                        // } else {
                            // not sure why this isn't being triggered
                            // return <li key={idx} className="moreComments">See All Comments</li>
                        // }
                    })}
                </ul>
            </li>
        )
        :
        (
            <li className={cardClass}>
                <header>
                        <h3 className="workoutTitle"><Link to={`/users/${this.props.user.id}`} className="userName">{this.props.user.first_name} {this.props.user.last_name}</Link> completed a {this.props.item.activity_type} workout of {this.props.completedRoute.distance} miles</h3>
                        <h3 className="workoutNotes">{this.props.item.notes}</h3>
                </header>

                <section className="workoutCardSection">
                    <Link className="sectionLink" to={`/workouts/${this.props.item.id}`}>

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
                                <img className="mapImage" src={`${this.props.completedRoute.maps_api_static_img}`}/>
                        </div>

                    </Link>
                </section>

                <footer>
                    <div className="leftSideFooter">
                        <div className="likeCount">{this.props.likeCount} {likeMsg}</div>
                        <button className="likeButton" onClick={() => this.handleLikeClick()}>{likeBtnText}</button>
                    </div>
                        <div className="daysAgo">{createdDaysAgo}</div>
                </footer>

                <ul className="commentsList">
                    {this.props.commentsArr.map((comment,idx) => {
                        return <li key={idx}>{comment.content}</li>
                    })}
                </ul>
            </li>
        )
    
        return (
                card
        )
    }
}

export default FeedIndexItem;
