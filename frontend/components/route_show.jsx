import React from 'react';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.getRoute(this.props.routeId);
    }

    render() { 
        return (  
            <div className="routeShowContainer">
                <h1>RouteShow rendered!</h1>
                {/* <h1>{this.props.route.name}</h1>

                <h2>Activity Type: {this.props.route.activity_type}</h2>
                <h2>City: {this.props.route.city}</h2>
                <h2>Distance: {this.props.route.distance}</h2>
                <h2>Created By: {this.props.user.name}</h2>
                <section>map image goes here!</section> */}
            </div>
            
        );
    }
}
 
export default RouteShow;