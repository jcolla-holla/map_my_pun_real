import React from 'react';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFriending = this.handleFriending.bind(this);
        this.handleUnfriending = this.handleUnfriending.bind(this);
        this.friendshipId;
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getRoutes();
        this.props.getWorkouts();
        this.props.getFriendships();
    }

    handleFriending() {
        let friendship = {starter_user_id: this.props.currentUserId, receiver_user_id: this.props.userId};
        this.props.createFriendship(friendship);
        location.reload();
    }

    handleUnfriending() {
        this.props.deleteFriendship(this.friendshipId);
        location.reload();
    }


    render() {
        let user = this.props.users[this.props.userId] ? this.props.users[this.props.userId] : {first_name: undefined, last_name: undefined};
        let alreadyFriend = false;
        let friendButton;

        // check to see if the user being shown is already a friend of the logged in user
        debugger
        if(typeof Object.values(this.props.friendships)[0] !== "undefined") {
            this.props.friendships.map(friendship => {
                let userIdArr = Object.values(friendship).slice(1,3);

                if (userIdArr.includes(parseInt(this.props.userId)) && userIdArr.includes(this.props.currentUserId)) {
                    alreadyFriend = true;
                    this.friendshipId = friendship.id;
                }
            })
        }

        if (alreadyFriend) {
            friendButton = (
                <div>
                    < h2 > already a friend!</h2 >
                    <button className="unfriendButton" onClick={() => this.handleUnfriending()}>Unfriend</button>
                </div>
            )
        } else {
            friendButton = <button className="addFriendButton" onClick={() => this.handleFriending()}>Add Friend</button>
        }

        return ( 
            <div id="userShowContainer">
                <section className="userShowInfoCard">
                    <h2>{`${user.first_name}` + ' ' + `${user.last_name}`}</h2>
                    {friendButton}
                </section>
            </div>
         );
    }
}
 
export default UserShow;