import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {
    constructor(props) {
        super(props);
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

                    <ul className="otherAppsList">Created by Jesse Colligan
                        {/* make these my github etc links */}
                        <div className="icons">
                            <li className="githubIcon">
                                <a title="GitHub" href="http://github.com/jcolla-holla/">
                                    <FontAwesomeIcon icon={faGithub} size="5x" color="white" />
                                </a>

                            </li> 
                            <li className="linkedinIcon">
                                <a title="LinkedIn" href="https://www.linkedin.com/in/jessecolligan/">
                                    <FontAwesomeIcon icon={faLinkedin} size="5x" color="white" />
                                </a>
                            </li>
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