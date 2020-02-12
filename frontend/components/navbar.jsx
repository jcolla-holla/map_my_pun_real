import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        return (  
            <div id="header">
                <a className="logo" href="#">Map My Pun</a>

                <ul className="navOptions">
                    <li>Training</li>
                    <li>Routes</li>
                    <li>Challenges</li>
                    <li>Go Premium</li>
                    <li>Blog</li>
                    <li className="shopButton">Shop</li>
                </ul>

                <section className="headerButtons">
                    <button className="loginButton">LOG IN</button>
                    <button className="signupButton">SIGN UP</button>
                </section>

                {/* IF LOGGED IN  - image profile picture */}
            </div>
        );
    }
}
 
export default NavBar;