import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import ProfileOverviewContainer from './profile_overview_container';
import FeedIndexContainer from './feed_index_container';
import MyDashboardContainer from './my_dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const Home = (props) => {
    return (
        <div id="home">
            <section className="homeNav">
                <NavLink activeClassName="active" to="/home/feed" className="activityFeedButton">ACTIVITY FEED</NavLink>
                <NavLink activeClassName="active" to="/home/my_dashboard" className="myDashboardButton">MY DASHBOARD</NavLink>
            </section>

            <div id="appContent">
                <div className="everyFeedContainer">
                <ProtectedRoute path="/home/my_dashboard" component={MyDashboardContainer} />
                <ProtectedRoute path="/home/feed" component={FeedIndexContainer} />
                </div>
                <section className="profileOverviewContainer">
                    <ProfileOverviewContainer />
                </section>
            </div>

        </div>
    )
}

export default Home;