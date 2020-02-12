import { connect } from "react-redux";
import SignUp from "./signUp";
import {signup} from '../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);