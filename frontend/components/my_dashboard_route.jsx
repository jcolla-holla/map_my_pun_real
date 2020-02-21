import React from 'react';
import { Link } from 'react-router-dom';

const MyDashboardRoute = (props) => {
    return (
        <li className={`routeItem div${props.gridDivNum}`}>
                {/* <Link to={`/routes/${props.route.id}`} className="routeItemContent">
                    <img className="routeItemMap" src={`${props.route.maps_api_static_img}`} />
                    <div className="routeItemMapOverlay">
                        <div className="routeTitle">{props.route.name}</div>
                    <div className="distanceCount"><p>{props.route.distance} </p>&nbsp; mi</div>
                    </div>
                </Link> */}
        </li>
    )
}

export default MyDashboardRoute;