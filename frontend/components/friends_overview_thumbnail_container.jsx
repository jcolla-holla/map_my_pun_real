import { connect } from "react-redux";
import { getUser } from "../actions/users_actions";
import FriendsOverviewThumbnail from "./friends_overview_thumbnail";


const mapStateToProps = (state) => ({
    user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    getUser: (userId) => dispatch(getUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsOverviewThumbnail);


