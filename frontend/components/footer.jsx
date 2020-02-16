import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        return (  
            <div id="footer">
                <section className="activitiesSection">
                    <a className="logo" href="#"></a>
                    <ul className="activitiesList">
                        <li>RIDE</li>
                        <li>WALK</li>
                        <li>HIKE</li>
                        <li>FITNESS</li>
                    </ul>
                </section>

                <section className="lists">
                    <ul className="socialList">Social
                        <li>Like us on Facebook</li>
                        <li>Follow us on Twitter</li>
                        <li>MapMyPun Blog</li>
                    </ul>

                    <ul className="helpList">Help
                        <li>Account Settings</li>
                        <li>Support</li>
                        <li>Developer API</li>
                    </ul>

                    <ul className="aboutUsList">About Us
                        <li>Advertise</li>
                        <li>Join Our Team</li>
                        <li>Shop Under Armour</li>
                    </ul>

                    <ul className="otherAppsList">Fitness Community
                        {/* make these my github etc links */}
                        <div>
                            <li className="dot appR"></li> 
                            <li className="dot appS"></li>
                            <li className="dot appEAT"></li>
                        </div>
                    </ul>
                </section>

                <section className="legal">
                    <a className="logo" href="#"></a>
                    <ul>
                        <li className="firstLi">All Rights Reserved</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Cookie Policy</li>
                        <li>Cookie References</li>
                        <li>Ad Choices</li>
                        <li>Do Not Sell My Personal Information</li>
                    </ul>

                </section>
            </div>
        );
    }
}
 
export default Footer;