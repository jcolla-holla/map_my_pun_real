import React from 'react';
import { Link } from 'react-router-dom';


class EditRoute extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.route;
    }

    componentDidMount() {
        this.props.getRoute(this.props.routeId);
    }

    handleSubmit () {
        this.props.updateRoute(this.state).then(alert("Route Successfully Updated!  Redirecting to Home")).then(() => this.props.history.push("/home/feed"));
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() { 
        return ( 
            <div id="routeEditContainer">
                <section className="routeEditInfoCard">

                    <title className="routeEditInfoTitle">{this.props.route.name}</title>
                    <div className="routeEditInfoBody">
                        <section className="routeEditMap">
                            <img className="mapImage" src={this.props.route.maps_api_static_img} />
                        </section>

                            <form className="routeEditInfo">
                                <label>
                                    Name:
                                    <input placeholder={this.state.name} type="text" value={this.state.name} onChange={this.update("name")}/>
                                </label>
                                <label>
                                    Activity Type:
                                    <input placeholder={this.state.activity_type} type="text" value={this.state.activity_type} onChange={this.update("activity_type")}/>
                                </label>
                                <label>
                                    City:
                                    <input placeholder={this.state.city} type="text" value={this.state.city} onChange={this.update("city")}/>
                                </label>
                                <h2>To update the map/distance, create a new route</h2>
                            </form>
                            
                    </div>

                    <div className="actionButtons">
                        <Link className="backButton" to={`/routes/${this.props.routeId}`}>Back</Link>
                        <Link className="homeButton" to="/home/feed">Home</Link>
                        <button onClick={() => this.handleSubmit()} className="updateButton">Update</button>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default EditRoute;