import React from 'react';
import { connect } from 'react-redux';
import FeedIndex from './feed_index';

const mapStateToProps = ({routes, workouts}) => ({
    routes,
    workouts
});

//I dont think I need any dispatch functions here right now... just passing this dummy to avoid possible errors for now
const mapDispatchToProps = ({
    nothing: null
})
 
export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);