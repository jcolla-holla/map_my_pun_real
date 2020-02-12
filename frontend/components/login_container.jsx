import { connect } from "react-redux";
import Login from "./login";
import { login } from '../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({ errors }) => {
    return {
        user: {email:"", password:""},
        errors: errors.session,
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);