import React from 'react';
import FeedIndexItem from './feed_index_item';
import {getTodaysDate} from '../util/date_util';
 

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
        this.workoutOrRoute = this.workoutOrRoute.bind(this);
    };

    //fetch all necessary data - routes - happens once.
    componentDidMount () {
            this.props.getUsers();
            this.props.getRoutes();
            this.props.getWorkouts();
            this.props.getFriendships();
            this.props.getLikes();
            this.props.getComments();
    };
    

    //hacky way of testing if the item is a route or workout by checking if the item has a key that only workouts have
    workoutOrRoute(item) {
        return item.route_completed_id ? "workout" : "route"
    }

    render() { 
        let mergedIndex = [];
        mergedIndex = mergedIndex.concat(this.props.routesArr).concat(this.props.workoutsArr);
        mergedIndex.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);

        const itemsLis = mergedIndex.map(item => {
            let completedRoute = undefined;
            // let that = this; // ran into google chrome browser bug of 'this' being undefined, that = this is for debuggering
            let itemLikes = [];
            let itemComments =[];
            let userLiked = false;
            let likeId;


            // itemLikes
            for (let i = 0; i < this.props.likesArr.length; i++) {
                if (item.id === this.props.likesArr[i].likeable_id && this.workoutOrRoute(item) === this.props.likesArr[i].likeable_type.toLowerCase()) {
                    itemLikes.push(this.props.likesArr[i].likeable_id)
                    if (this.props.currentUser.id === this.props.likesArr[i].user_id) {
                        userLiked = true;
                        likeId = this.props.likesArr[i].id;
                    }
                }

            }

            // itemComments
            for (let i = 0; i < this.props.commentsArr.length; i++) {
                if (item.id === this.props.commentsArr[i].commntable_id && this.workoutOrRoute(item) === this.props.commentsArr[i].commntable_type.toLowerCase()) {
                    itemComments.push(this.props.commentsArr[i])
                }
            }


            if (this.workoutOrRoute(item) === "workout") {
                //terrible N query here bc entities.routes is an array, can potentially fix later with following line:
                // completedRoute = this.props.routesObj[item.route_completed_id];

                // Array (slower) version:
                for (let i = 0; i < this.props.routesArr.length; i++) {
                    if (this.props.routesArr[i].id === item.route_completed_id) {
                        completedRoute = this.props.routesArr[i];
                    }
                }   
            }

            //set up prop completedRoute to pass to child FeedIndexItem
            if (typeof completedRoute === 'undefined') {
                completedRoute = { activity_type: "", name: "", city: "", user_id: undefined, maps_api_static_img: "", distance: undefined };
            }

            //set up prop user to pass to child FeedIndexItem
            let userThread = this.props.users[item.user_id];
            if (typeof userThread === 'undefined') {
                userThread = { email:"", password_digest:"", first_name:"",last_name:"",session_token:"",created_at:"",updated_at:"" };
            }

            return <FeedIndexItem 
                createComment={this.props.createComment}
                deleteComment={this.props.deleteComment}
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
                currentUserId={this.props.currentUser.id} 
                user={userThread} 
                likeId={likeId} 
                userLiked={userLiked} 
                likeCount={itemLikes.length} 
                commentsArr={itemComments} 
                completedRoute={completedRoute} 
                itemType={this.workoutOrRoute(item)} 
                item={item} 
                key={this.workoutOrRoute(item) + item.id.toString()} 
            />
        })

        return (
        <div id="statusFormContainer">
                
                <div className="collapseContainer">
                <label className="collapse" htmlFor="_1"></label>
                <input id="_1" type="checkbox"></input>
                    <div>
                        <div className="activityFeedDateContainer">
                            <h2 className="activityFeedDate">Today: {getTodaysDate()}</h2>
                        </div>

                        <form className="statusForm">
                            <div className="statusProfPic"></div>
                            <div className="statusFormFields">
                                <textarea className="statusText" placeholder="Add a status update here..."></textarea>
                                <button type="submit" className="statusSubmit">POST</button>
                            </div>
                        </form></div>
                </div>

                <div id="feedIndexContainer">
                    <div className="scrollDownMsg">
                        <div className="greetingContainer">
                            <div className="waveEmoji"></div>
                            <p> Hi there!</p> 
                        </div>

                        <span> Scroll down to view your feed</span>

                        <div className="scrollDownIcon"></div>
                    </div>

                    
                    <ul className="activitiesIndex" id="cards">
                        {itemsLis}
                        <div className="bottomMsg"> 
                            <div className="partyEmoji"></div>
                            <div className="madeItMsg">You made it to the bottom of your feed!</div>
                        </div>
                    </ul>
                    
                </div>
            </div>
        );
    };
}
 
export default FeedIndex;