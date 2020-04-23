import React from 'react';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount () {
        this.props.getRoute(this.props.routeId);
        this.props.getComments()
    }

    handleDelete() {
        this.props.deleteRoute(this.props.routeId).then(() => this.props.history.push("/home/feed")).then(alert("Route (and associated workouts) Successfully Deleted!"));
    }

    render() { 

        let itemComments = [];

        for (let i = 0; i < this.props.commentsArr.length; i++) {
            if (this.props.route.id === this.props.commentsArr[i].commntable_id && this.props.commentsArr[i].commntable_type.toLowerCase() === "route") {
                itemComments.push(this.props.commentsArr[i])
            }
        }

        let commentsList = itemComments.map((comment, idx) => {
            if (comment.user_id === this.props.currentUserId) {
                return <li className="myComment" key={idx}>
                    <div>{comment.content}</div>
                    <button className="commentDeleteBtn" onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
                </li>
            } else {
                return <li key={idx}>
                    <div>{comment.content}</div>
                </li>
            }
        })
        return (  
            <div id="routeShowContainer">
                <section className="routeShowInfoCard">
                    
                    <title className="routeShowInfoTitle">{this.props.route.name}</title>
                    <div className="routeShowInfoBody"> 
                        <section className="routeShowMap">
                            <img className="mapImage" src={this.props.route.maps_api_static_img}/>
                        </section>
                        
                        <div className="routeShowInfo">
                            <h2 className="nonList">Activity Type: {this.props.route.activity_type}</h2>
                            <h2 className="nonList">City: {this.props.route.city}</h2>
                            <h2 className="nonList">Distance: {this.props.route.distance}</h2>
                            <ul className="routeWorkoutsCommentsList">
                                <h2>Comments:</h2>
                                {commentsList}
                            </ul>
                        </div>
                    </div>
                
                    <div className="actionButtons">
                        <Link className="editButton" to={`/route_edit/${this.props.route.id}`}>Edit</Link>
                        <button onClick={() => this.handleDelete()} className="deleteButton">Delete</button>
                    </div>
                </section>

                
                {/* <h2>Created By: {this.props.user.name}</h2> */}

            </div>
            
        );
    }
}
 
export default RouteShow;