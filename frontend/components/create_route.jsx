import React from 'react';

class CreateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activity_type: "", name: "", city: "", user_id: this.props.currentUser.id, distance: undefined, start_loc_lat: undefined, start_loc_long: undefined, end_loc_lat: undefined, end_loc_long: undefined}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRoute(this.state);
        //redirect back to /Home to see feed
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    //HANDLE ERRORS - refer to 'signup.jsx' for inspiration

    render() { 
        return ( 
            <div id="createRouteFormContainer">
                <h1>Make a new route by clicking a start and end point</h1>
                <form className="createRouteForm" onSubmit={this.handleSubmit}>


                    <input className="regularFields" type="text" value={this.state.activity_type} placeholder="Activity Type (ex: run, swim, bike)" onChange={this.update("activity_type")}/>
                    <input className="regularFields" type="text" value={this.state.name} placeholder="Route Name" onChange={this.update("name")}/>
                    <div className="mapInputContainer">
                        <input className="mapInput" type="text" value="this is where the map goes!"/>
                    </div>
                    <input className="createRouteButton" type="submit" value="Create Route"/>
                </form>
            </div>
         )
    }
}
 
export default CreateRoute;