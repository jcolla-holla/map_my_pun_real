import React from 'react';
import ReactDOM from 'react-dom';

//set map center to New York upon load
const mapCenter = {lat: 40.7128, lng: -74.0060};

//example routeNodes - burritos in SF
// const routeNodes = [
//     { lat: 40.6782, lng: 73.9442, name: "Brooklyn" }
// ];

class Map extends React.Component {
    constructor(props) {
        super(props);

        //add a single routeNode?
        this.addRouteNode = this.addRouteNode.bind(this);
        this.numRouteNodes = 0;
    }

    
    componentDidMount() {
        /*
        * ReactDOM.findDOMNode gets us a pointer to the actual html DOM 
        * element, not its React component class instance, this is what 
        * Google maps wants to render the map into this.refs is an object 
        * populated by giving children a 'ref' prop when we render
        */
        const map = ReactDOM.findDOMNode(this.refs.map);

        /*
        * we make these options so when the map loads up it displays a
        * good location and zoom level, zoom of 13 show most of NY?
        */
        const options = {
            center: mapCenter,
            zoom: 13
        };

        // this line actually creates the map and renders it into the DOM
        this.map = new google.maps.Map(map, options);

        // add a movement listener -- don't think this function serves any real purpose from demo
        // this.registerListeners();
    }

    addRouteNode(routeNode) {
        const pos = new google.maps.LatLng(routeNode.lat, routeNode.lng);

        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });

        //not sure if "this" here will work
        this.numRouteNodes += 1;
    }

    render() { 
        return (  
            <div className="createRouteMapContainer">
                <h1>Click to make a start point and an end point for your route</h1>
                <div id='map' ref='map'/>
            </div>
        );
    }
}

export default Map;


// FROM DEMO FILE
    // listenForMove() {
    //     /* 
    //      * we listen for the m ap to emit an 'idle' event, it does this when
    //      * the map stops moving
    //      */
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const bounds = this.map.getBounds();
    //         alert('map has moved, check console to see updated bounds');

    //         console.log('center',
    //             bounds.getCenter().lat(),
    //             bounds.getCenter().lng());
    //         console.log("north east",
    //             bounds.getNorthEast().lat(),
    //             bounds.getNorthEast().lng());
    //         console.log("south west",
    //             bounds.getSouthWest().lat(),
    //             bounds.getSouthWest().lng());
    //     });
    // }
