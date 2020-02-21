import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        return (  
            <div id="splash">
                <div className="anchorDiv">
                    <h1>Own Every Mile</h1>
                    <h2>Run Your Routes with Friends</h2>

                    <Link to="/signup" className="signupButton">SIGN UP</Link>
                    <div className="featuresDiv">
                        <div className="featureContainer">
                            <h3 className="featureDesc">Create Running Routes</h3>
                            <Link className="learnMoreButton" to="/signup">Learn More</Link>
                        </div>

                        <div className="featureContainer">
                            <h3 className="featureDesc">Follow Your Friends</h3>
                            <Link className="learnMoreButton" to="/signup">Learn More</Link>
                        </div>

                        <div className="featureContainer">
                            <h3 className="featureDesc">Share Your Workouts</h3>
                            <Link className="learnMoreButton" to="/signup">Learn More</Link>
                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Splash;