import React from 'react';
import { Link } from 'react-router-dom';

// improvement possibility: add number of workouts and routes for each user or some kind of hover preview

class FindFriends extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getWorkouts();
        this.props.getRoutes();
        this.props.getFriendships();
    }

    render() {
        let friendsList = [];
        let nonFriendsList = [];

        // generate friends and non-friends Lists
        this.props.users.map(user => {
            let isFriend = false;

            this.props.friendships.map(friendship => {
                let userIdArr = Object.values(friendship).slice(1, 3);
                if (userIdArr.includes(user.id) && userIdArr.includes(this.props.currentUserId)) {
                    isFriend = true;
                }
            })

            if (user.id === this.props.currentUserId) {
                // do nothing - exclude logged in user from any rendered list
            } else {
                if (isFriend) {
                    friendsList.push(
                        <li key={user.id}> <Link to={`/users/${user.id}`}>{`${user.first_name}` + ' ' + `${user.last_name}`}</Link> </li>
                        );
                } else {
                    nonFriendsList.push(
                        <li key={user.id}> <Link to={`/users/${user.id}`}>{`${user.first_name}` + ' ' + `${user.last_name}`}</Link> </li>
                    );
                    }
                }
        })

        return (  
            <div id="findFriends">
                <div className="friendsSection">
                    <h3>Friends</h3>
                    <ul className="friendsList">
                        {friendsList}
                    </ul>
                </div>

                <div className="nonFriendsSection">
                    <h3>Non-Friends</h3>
                    <ul className="nonFriendsList">
                        {nonFriendsList}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default FindFriends;