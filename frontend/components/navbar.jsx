import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let userExists = this.props.currentUser;
        let greetingButtons = (userExists) ?
                (
                    <section className="headerButtons">
                        <button className="logoutButton" onClick={() => this.props.logout()}>LOGOUT</button>
                        <Link to="/home/feed" className="profilePic"></Link>
                    </section>
                )
                :
                (
                    <section className="headerButtons">
                        <Link to="/login" className="loginButton">LOG IN</Link>
                        <Link to="/signup" className="signupButton">SIGN UP</Link>
                    </section>
                )

        return (  
            <div id="header">
                <a className="logo" href="#">Map My Pun</a>

                {/* might eventually bring these back */}
                {/* <ul className="navOptions">
                    <li>Training</li>
                    <li>Routes</li>
                    <li>Challenges</li>
                    <li>Go Premium</li>
                    <li>Blog</li>
                    <li className="shopButton">Shop</li>
                </ul> */}

                {greetingButtons}

                {/* <section className="headerButtons">
                    <Link to="/login" className="loginButton">LOG IN</Link>
                    <Link to="/signup" className="signupButton">SIGN UP</Link>
                </section> */}

                {/* IF LOGGED IN  - image profile picture */}
            </div>
        );
    }
}
 
export default NavBar;