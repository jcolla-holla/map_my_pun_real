import React from 'react';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentDidMount () {
        this.props.getRoute(this.props.routeId);

        //need to create 'get user' to get the user's name
    }

    handleDelete() {
        this.props.deleteRoute(this.props.routeId).then(() => this.props.history.push("/home/feed")).then(alert("Route Successfully Deleted!"));

        // this.props.createRoute(this.state).then(() => this.props.history.push("/home/feed")).then(alert("New Route Successfully Created!"));
    }

    render() { 
        return (  
            <div id="routeShowContainer">
                <section className="routeShowInfoCard">
                    
                    <title className="routeShowInfoTitle">{this.props.route.name}</title>
                    <div className="routeShowInfoBody"> 
                        <section className="routeShowMap">map image goes here!</section>
                        
                        <div className="routeShowInfo">
                            <h2>Activity Type: {this.props.route.activity_type}</h2>
                            <h2>City: {this.props.route.city}</h2>
                            <h2>Distance: {this.props.route.distance}</h2>
                        </div>
                    </div>
                
                    <div className="actionButtons">
                        <Link className="editButton" to="routes_edit/:id">Edit</Link>
                        <button onClick={() => this.handleDelete()} className="deleteButton">Delete</button>
                    </div>
                </section>

                
                {/* <h2>Created By: {this.props.user.name}</h2> */}

            </div>
            
        );
    }
}
 
export default RouteShow;