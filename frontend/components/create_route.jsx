import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 40.7128, lng: -74.0060 };

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class CreateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activity_type: "", name: "", city: "", user_id: this.props.currentUser.id}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCoords = this.updateCoords.bind(this);

        this.handleMapClick = this.handleMapClick.bind(this);
        this.addToDistance = this.addToDistance.bind(this);
        this.markerCount = 0;
        this.coords = [];
    }

    componentDidMount() {
        const map = ReactDOM.findDOMNode(this.refs.map);
        const options = {
            center: mapCenter,
            zoom: 13
        };

        // this line actually creates the map and renders it into the DOM
        this.map = new google.maps.Map(map, options);
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleMapClick(coords);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        //redirects to the home screen
        this.props.createRoute(this.state).then(() => this.props.history.push("/home/feed"))

            // .then(alert("New Route Successfully Created!"));
    }

    updateCoords (coords) {
        this.coords.push(coords);
    }

    handleMapClick(coords) {
        //possible fun thing: add custom markers - https://developers.google.com/maps/documentation/javascript/custom-markers

        //coords should be in format of object {lat: x, lng: y}
        this.markerCount += 1;
        if (this.markerCount === 1) {
            const marker = new google.maps.Marker({
                position: coords,
                map: this.map,
                num: this.markerCount,
            });
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }

        this.updateCoords(coords)
        if (this.coords.length > 1) {
            this.makeAPIDirectionRequest();
        }
    }

    makeAPIDirectionRequest () {
        const wayPoints = this.coords.slice(1, -1).map(coord => ({
            location: coord
        }));

        const directionsRequestParams = {
            origin: this.coords[0],
            destination: this.coords.slice(-1)[0],
            waypoints: wayPoints,
            travelMode: 'WALKING',
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }

        //following directions from google api: https://developers.google.com/maps/documentation/javascript/directions   
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();

        directionsRenderer.setMap(this.map);
        this.updateDistance();
        directionsService.route(directionsRequestParams, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
    }

    //POSSBILY UNNECESSARY HELPER FUNCTION
    addToDistance(distanceToAdd) {
        //meters to miles
        this.state.distance += distanceToAdd * 0.00062137;
    }

    updateDistance () {
        var service = new google.maps.DistanceMatrixService();
        const originsArr = [this.coords[0]];
        const destinationsArr = [this.coords.slice(-1)[0]];


        // for loop excludes iterating through the first and last element
        for (let index = 1; index < this.coords.length - 1; index++) {
            originsArr.push(this.coords[index]);
            destinationsArr.unshift(this.coords[index]);
        }

        let totalDistance = undefined;
        if (this.coords.length >= 2) {
            totalDistance = 0;
        }

        service.getDistanceMatrix(
            {
                origins: originsArr,
                destinations: destinationsArr,
                travelMode: 'WALKING',
            }, callback.bind(this));

        function callback(response, status) {
            if (status == 'OK') {
                var origins = response.originAddresses;
                // var destinations = response.destinationAddresses;
                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                        var element = results[j];
                        
                        totalDistance += element.duration.value;
                    }
                }
                // meters to miles
                this.setState({ distance: (totalDistance * 0.00062137).toFixed(2) });
            }
        }
    }
            
    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    //HANDLE ERRORS - refer to 'signup.jsx' for inspiration

    render() { 
        let renderErrors = (this.props.errors) ?
            (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="sessionError" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
            :
            ("")

        return ( 
            <div id="createRouteFormContainer">
                <h1>Make a new route</h1>
                <form className="createRouteForm" onSubmit={this.handleSubmit}>


                    <input required className="regularFields" type="text" value={this.state.activity_type} placeholder="Activity Type (ex: run, swim, bike)" onChange={this.update("activity_type")}/>
                    <input required className="regularFields" type="text" value={this.state.name} placeholder="Route Name" onChange={this.update("name")}/>
                    <input required className="regularFields" type="text" value={this.state.city} placeholder="City" onChange={this.update("city")}/>

                    <div className="sessionErrors">
                        {renderErrors}
                    </div>

                    <input className="createRouteButton" type="submit" value="Create Route" />
                    <div id="mapInputContainer">
                        <div className="createRouteMapContainer">
                            <h1>Click on map to make your route</h1>
                            <div id='map' ref='map' />
                        </div>
                    </div>
                    <input className="createRouteButton" type="submit" value="Create Route" />

                </form>
            </div>
         )
    }
}
 
export default CreateRoute;