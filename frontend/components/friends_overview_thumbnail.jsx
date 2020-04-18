import { Link } from 'react-router-dom';
import React from 'react'

class FriendsOverviewThumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <Link className="friend" to={`/user/${this.props.otherUserId}`}>
                <div className="friendImage"></div>
                <div className="friendName">
                    {/* {this.props.user.first_name} */}
                    name
                </div>
            </Link>
         );
    }
}
 
export default FriendsOverviewThumbnail;