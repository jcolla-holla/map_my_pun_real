//NOTE: THIS FILE ORIGINALLY WAS ITs OWN MAP COMPONENT RENDERED WITHIN CREATE_ROUTE.jsx BUT IT BECAME TOO BURDENSOME TO DO SO

// import React from 'react';
// import ReactDOM from 'react-dom';

// //set map center to New York upon load
// // const mapCenter = {lat: 40.7128, lng: -74.0060};

// // //example routeNodes - burritos in SF
// // // const routeNodes = [
// // //     { lat: 40.6782, lng: 73.9442, name: "Brooklyn" }
// // // ];

// // const getCoordsObj = latLng => ({
// //     lat: latLng.lat(),
// //     lng: latLng.lng()
// // });

// class Map extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleMapClick = this.handleMapClick.bind(this);
//         // this.markerCount = 0;
//         // set an empty array for each market object {lat: x, lng: y}
//     }

//     // componentDidMount() {
//     //     const map = ReactDOM.findDOMNode(this.refs.map);
//     //     const options = {
//     //         center: mapCenter,
//     //         zoom: 13
//     //     };

//     //     // this line actually creates the map and renders it into the DOM
//     //     this.map = new google.maps.Map(map, options);
//     //     google.maps.event.addListener(this.map, 'click', (event) => {
//     //         const coords = getCoordsObj(event.latLng);
//     //         this.handleMapClick(coords);
//     //     });
//     // }


//     // handleMapClick (coords) {
//     //     //possible fun thing: add custom markers - https://developers.google.com/maps/documentation/javascript/custom-markers

//     //     //coords should be in format of object {lat: x, lng: y}
//     //     this.markerCount += 1;
//     //     const marker = new google.maps.Marker({
//     //         position: coords,
//     //         map: this.map,
//     //         num: this.markerCount,
//     //     });

//     //     //sets the first marker to bounce and all subsequent to just drop
//     //     if (this.markerCount === 1) {
//     //         marker.setAnimation(google.maps.Animation.BOUNCE);
//     //     } else {
//     //         marker.setAnimation(google.maps.Animation.DROP);
//     //     }
//     //     this.updateCoords(coords)
//     // }

//     render() { 
//         return (  
//             <div className="createRouteMapContainer">
//                 <h1>Click to make a start point and an end point for your route</h1>
//                 <div id='map' ref='map'/>
//             </div>
//         );
//     }
// }

// export default Map;


// // FROM DEMO FILE
//     // listenForMove() {
//     //     /* 
//     //      * we listen for the m ap to emit an 'idle' event, it does this when
//     //      * the map stops moving
//     //      */
//     //     google.maps.event.addListener(this.map, 'idle', () => {
//     //         const bounds = this.map.getBounds();
//     //         alert('map has moved, check console to see updated bounds');

//     //         console.log('center',
//     //             bounds.getCenter().lat(),
//     //             bounds.getCenter().lng());
//     //         console.log("north east",
//     //             bounds.getNorthEast().lat(),
//     //             bounds.getNorthEast().lng());
//     //         console.log("south west",
//     //             bounds.getSouthWest().lat(),
//     //             bounds.getSouthWest().lng());
//     //     });
//     // }
