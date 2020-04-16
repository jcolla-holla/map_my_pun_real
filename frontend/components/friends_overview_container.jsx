import { connect } from "react-redux";
import { getFriendships } from "../actions/friendship_actions";
import { getUsers } from "../actions/users_actions";
import FriendsOverview from "./friends_overview";


const mapStateToProps = (state) => ({
    friendships: state.entities.friendships,
    currentUserId: state.session.id,
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    getFriendships: () => dispatch(getFriendships()),
    getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsOverview);


