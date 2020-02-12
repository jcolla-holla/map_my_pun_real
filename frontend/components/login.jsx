import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }
    
    render() { 
        return ( 
            <div id="loginFormContainer">
                <div className="signupLinkContainer">
                    <Link to="/signup" className="signupLink">SIGNUP</Link>
                </div>
                <a className="facebookSignIn">DEMO USER</a>
                <p>OR</p>

                <form className="loginForm" onSubmit={this.handleSubmit}>
                        <input placeholder="Email" type="text" value={this.state.email} onChange={this.update("email")}/>
                        <input placeholder="Password" type="text" value={this.state.password} onChange={this.update("password")}/>

                    <p className="forgotPassword">Forgot Password?</p>

                    <input className="loginButton" type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}
 
export default Login;