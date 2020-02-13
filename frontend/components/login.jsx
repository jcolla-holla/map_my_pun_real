import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        //this.props.user is: {email:"", password:""}
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    demoLogin(){
        this.props.processForm({ email: "demo_user@fake.com", password: "password", first_name: "Demo", last_name: "User", country: "United States", gender: "Female"});
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="sessionError" key={`error-${i}`}>
                            Error {i + 1} -- {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return "";
        };
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }
    
    render() { 
        return ( 

            <div id="loginFormContainer">
                <div className="sessionErrors">
                    {this.renderErrors()}
                </div>
                <div className="signupLinkContainer">
                    <Link to="/signup" className="signupLink">SIGNUP</Link>
                </div>
                <a className="facebookSignIn" onClick={this.demoLogin}>DEMO USER</a>
                <p>OR</p>

                <form className="loginForm" onSubmit={this.handleSubmit}>
                        <input placeholder="Email" type="text" value={this.state.email} onChange={this.update("email")}/>
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.update("password")}/>

                    <p className="forgotPassword">Forgot Password?</p>

                    <input className="loginButton" type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}
 
export default Login;