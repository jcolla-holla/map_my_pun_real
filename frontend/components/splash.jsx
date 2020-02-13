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
                    <h1>Running Out of Routes?</h1>
                    <h2>Run Up Miles with Friends</h2>

                    <Link to="/signup" className="signupButton">SIGN UP</Link>
                    <div className="featuresDiv">
                        <div className="featureContainer">
                            <h3 className="featureDesc">Create Running Routes</h3>
                            <a href="#">Learn More</a>
                        </div>

                        <div className="featureContainer">
                            <h3 className="featureDesc">Follow Your Friends</h3>
                            <a href="#">Learn More</a>
                        </div>

                        <div className="featureContainer">
                            <h3 className="featureDesc">Share Your Workouts</h3>
                            <a href="#">Learn More</a>
                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Splash;