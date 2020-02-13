import { connect } from "react-redux";
import SignUp from "./signup";
import {signup, login} from '../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({errors}) => {
    return {
        user: { email: "", password: "" },
        errors: errors.session,
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: (user) => dispatch(login(user))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);