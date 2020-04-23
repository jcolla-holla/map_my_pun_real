import React from 'react';
import { Link } from 'react-router-dom';
import {distanceFromToday} from '../util/date_util';


class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);

        let itemType = this.props.itemType;
        let newItemType = itemType.charAt(0).toUpperCase() + itemType.slice(1);
        this.state = { commntable_id: this.props.item.id, commntable_type: newItemType, user_id: this.props.currentUserId, content: ""};
    }

    handleLikeClick() {
        if (this.props.userLiked) {
            this.props.deleteLike(this.props.likeId)

            // crappy fix to reload whole feed instead of rendering component
            location.reload();
        } else {
            // need to capitalize "workout" to "Workout" (and same for 'route') in order for rails to accept it
            let itemType = this.props.itemType;
            let newItemType = itemType.charAt(0).toUpperCase() + itemType.slice(1);
            this.props.createLike({ likeable_id: this.props.item.id, likeable_type: newItemType, user_id: this.props.currentUserId});

            // crappy fix to reload whole feed instead of rendering component
            location.reload();
        }
    }

    handleCommentDelete(commentId) {
        // crappy fix to reload whole feed instead of rendering component
        location.reload();
        this.props.deleteComment(commentId);

        // possible re-render
        // this.setState({ ["content"]: "" });
    }


    // for the creation of a new comment
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({ ["content"]: "" });
    }

   

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }


    
    render() { 
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

        
        let commentsList =  this.props.commentsArr.map((comment, idx) => {
                if (idx <= 1) {

                    if (comment.user_id === this.props.currentUserId) {
                        return <li className="myComment" key={idx}>
                            <div>{comment.content}</div>
                            <button className="commentDeleteBtn" onClick={() => this.handleCommentDelete(comment.id)}>Delete</button>
                        </li>
                    } else {
                        return <li key={idx}>
                            <div>{comment.content}</div>
                        </li>
                    }
                } else if (idx === 2) {
                    return <li key={idx} className="moreComments"> <Link className="moreCommentsLink" to={`/${comment.commntable_type}s/${comment.commntable_id}`}>See All Comments</Link> </li>
                }
            })


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
                <div >
                    <ul className="commentsList">
                        {commentsList}
                        <li>
                            <form className="commentForm" onSubmit={this.handleSubmit}>
                                <input className="commentInput" placeholder="Leave a comment..." type="text" value={this.state.content} onChange={this.update("content")}/>
                                <input className="submitComment" type="submit" value="POST" />
                            </form>
                        </li>
                    </ul>
                </div>
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

                <div >
                    <ul className="commentsList">
                        {commentsList}
                        <li>
                            <form className="commentForm" onSubmit={this.handleSubmit}>
                                <input className="commentInput" placeholder="Leave a comment..." type="text" value={this.state.content} onChange={this.update("content")} />
                                <input className="submitComment" type="submit" value="POST" />
                            </form>
                        </li>
                    </ul>
                </div>
                
            </li>
        )
    
        return (
                card
        )
    }
}

export default FeedIndexItem;
