import React from 'react';
import Map from './map';

class CreateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activity_type: "", name: "", city: "", user_id: this.props.currentUser.id, distance: undefined, start_loc_lat: undefined, start_loc_long: undefined, end_loc_lat: undefined, end_loc_long: undefined}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        this.coords = []
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRoute(this.state);
        //redirect back to /Home to see feed
    }

    updateCoords (coords) {
        debugger
        this.coords.push(coords);
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
                <h1>Make a new route</h1>
                <form className="createRouteForm" onSubmit={this.handleSubmit}>


                    <input className="regularFields" type="text" value={this.state.activity_type} placeholder="Activity Type (ex: run, swim, bike)" onChange={this.update("activity_type")}/>
                    <input className="regularFields" type="text" value={this.state.name} placeholder="Route Name" onChange={this.update("name")}/>
                    <input className="createRouteButton" type="submit" value="Create Route" />
                    <div id="mapInputContainer">
                        <Map updateCoords={this.updateCoords}/>
                    </div>
                    <input className="createRouteButton" type="submit" value="Create Route" />

                </form>
            </div>
         )
    }
}
 
export default CreateRoute;