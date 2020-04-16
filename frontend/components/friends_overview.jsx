import React from 'react';
import { Link } from 'react-router-dom';

class FriendsOverview extends React.Component {
    constructor(props) {
        super(props);

    }

    // component did mount - load all friends

    render() { 
        return ( 
            <div id="friendsOverview">
                <h1>Friends</h1>
                
                <div className="friendsList">
                    {/* data here is hardcoded currently: */}
                    <Link className="friend">
                        <div className="friendImage"></div> 
                        <div className="friendName">
                            Eric    
                        </div> 
                    </Link>
                    <Link className="friend">
                        <div className="friendImage"></div> 
                        <div className="friendName">
                            Matt    
                        </div> 
                    </Link>
                    <Link className="friend">
                        <div className="friendImage"></div> 
                        <div className="friendName">
                            Amelia    
                        </div> 
                    </Link>

                    <Link className="viewAllButton" to="/friends">View All</Link>
                </div>

                <div className="actionLinks">
                    <Link className="addFriendButton" to="/friends">Add Friend</Link>
                    <Link className="seeFriendsButton" to="/friends">See All Friends</Link>
                </div>
            </div>
         );
    }
}
 
export default FriendsOverview;