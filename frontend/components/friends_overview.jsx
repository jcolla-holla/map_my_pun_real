import React from 'react';
import { Link } from 'react-router-dom';
import FriendsOverviewThumbnail from './friends_overview_thumbnail';

class FriendsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.friendCount = 0;

    }

    componentDidMount() {
        this.props.getFriendships();
        this.props.getUsers();
    }

    render() { 
        let friendsLis;
        // reset friendCount to zero so doesn't persist across renders
        this.friendCount = 0;
        if (Object.values(this.props.friendships).length > 0) {

            friendsLis = this.props.friendships.slice(0,5).map((friendship, idx) => {

                    // if the current user is involved in the friendship
                    if (friendship.starter_user_id === this.props.currentUserId || friendship.receiver_user_id === this.props.currentUserId) {
                        this.friendCount += 1;
                        let otherUserId;
                        if (friendship.starter_user_id === this.props.currentUserId) {
                            otherUserId = friendship.receiver_user_id;
                        } else {
                            otherUserId = friendship.starter_user_id;
                        }
                        
                        return (
                            <Link className="friend" key={idx} to={`/users/${otherUserId}`}>
                                <div className="friendImage"></div>
                                <div className="friendName">
                                    {this.props.users[otherUserId].first_name}
                                </div>
                            </Link>
                        )
                    }
                    
                    if (this.friendCount === 0 && idx === this.props.friendships.length - 1) {
                        return (
                            <Link className="noFriendsLink" key={idx} to={`/find_friends`}>
                                <div>You don't have any friends yet! Add some here.</div>
                            </Link>
                        )
                    }

                })
        } 

        let viewAllMsg;
        let actionLinks;
        // if (this.friendCount > 5) {
        //     viewAllMsg = <Link className="viewAllButton" to="/find_friends"> The rest</Link>;
        // }

        if (this.friendCount > 0) {
            actionLinks = (
                <div className="actionLinks">
                    <Link className="addFriendButton" to="/find_friends">Add Friend</Link>
                    <Link className="seeFriendsButton" to="/find_friends">See All Friends</Link>
                </div>
            )
        } else {
            actionLinks = <div></div>
        }


        return ( 
            <div id="friendsOverview">
                <h1>Friends</h1>

                    <div className="friendsList">
                        {friendsLis}
                        {viewAllMsg}
                    </div>

                    {actionLinks}

                    
            </div>
         );
    }
}
 
export default FriendsOverview;