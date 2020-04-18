import React from 'react';
import { Link } from 'react-router-dom';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFriending = this.handleFriending.bind(this);
        this.handleUnfriending = this.handleUnfriending.bind(this);
        this.friendshipId;
    }

    componentDidMount() {
        this.props.getFriendships();
        this.props.getUsers();
        this.props.getRoutes();
        this.props.getWorkouts();
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
        if(typeof Object.values(this.props.friendships)[0] !== "undefined") {
            this.props.friendships.map(friendship => {
                let userIdArr = Object.values(friendship).slice(1,3);

                if (userIdArr.includes(this.props.userId) && userIdArr.includes(this.props.currentUserId)) {
                    alreadyFriend = true;
                    this.friendshipId = friendship.id;
                }
            })
        }

        if (alreadyFriend) {
            friendButton = (
                <div>
                    <div className="alreadyFriendMsg">Already a friend!</div>
                    <button className="unfriendButton" onClick={() => this.handleUnfriending()}>Unfriend</button>
                </div>
            )
        } else {
            friendButton = <button className="addFriendButton" onClick={() => this.handleFriending()}>Add Friend</button>
        }

        //get only the user shown's workouts and routes
        //WORKOUTS
        let myWorkoutsArr = [];
        this.props.workouts.map(workout => {
            if (workout.user_id === this.props.userId) {
                myWorkoutsArr.push(workout);
            }
        })

        let myWorkoutsList = myWorkoutsArr.map(workout => {
            return <li key={workout.id}> <Link to={`/workouts/${workout.id}`}>{workout.name}</Link> </li>
        })

        if (myWorkoutsList.length === 0) {
            myWorkoutsList = <li>None yet!</li>
        }

        //ROUTES
        let myRoutesArr = [];
        this.props.routes.map(route => {
            if (route.user_id === this.props.userId) {
                myRoutesArr.push(route);
            }
        })

        let myRoutesList = myRoutesArr.map(route => {
            return <li key={route.id}> <Link to={`/routes/${route.id}`}>{route.name}</Link> </li>
        })

        if (myRoutesList.length === 0) {
            myRoutesList = <li>None yet!</li>
        }


        return ( 
            <div id="userShowContainer">
                <section className="userShowInfoCard">
                    <div className="userShowInfo">
                        <div>
                            <div className="profilePic"></div>
                            <h2>{`${user.first_name}` + ' ' + `${user.last_name}`}</h2>
                        </div>
                        {friendButton}
                        <div className="routesAndWorkouts">
                            <div>
                                <h3>Workouts</h3>
                                <ul className="workoutsList">
                                    {myWorkoutsList}
                                </ul>
                            </div>

                            <div >
                                <h3>Routes</h3>
                                <ul className="routesList">
                                    {myRoutesList}
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default UserShow;