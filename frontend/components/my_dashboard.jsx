import React from 'react';
import MyDashboardWorkout from './my_dashboard_workout';
import MyDashboardRoute from './my_dashboard_route';

class MyDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getWorkouts();
        this.props.getRoutes();
    }

    render() { 

        //WORKOUTS
        let myWorkoutsArr = [];
        this.props.workouts.map(workout => {
            if (workout.user_id === this.props.currentUser.id) {
                myWorkoutsArr.push(workout);
            }
        })
        
        let myWorkoutsToRender = myWorkoutsArr.map( (myWorkout,idx) => {
            // TERRIBLE FOR SPEED BELOW but pressed for time to finish.  Future improvement: jbuilder objects instead of arrays
            let route_completed;
            for (let index = 0; index < this.props.routes.length; index++) {
            
                if (myWorkout.route_completed_id === this.props.routes[index].id) {
                    route_completed = this.props.routes[index];
                } 
            }

            route_completed ? route_completed : { distance: undefined, maps_api_static_img: undefined }
            return <MyDashboardWorkout key={idx} workout={myWorkout} route_completed_distance={route_completed.distance} route_completed_map_url={route_completed.maps_api_static_img}/>
        })


        //ROUTES
        let myRoutesArr = [];
        this.props.routes.map(route => {
            if (route.user_id === this.props.currentUser.id) {
                myRoutesArr.push(route);
            }
        })

        let myRoutesToRender = myRoutesArr.map((myRoute, idx) => {
            return <MyDashboardRoute gridDivNum={idx + 1}  key={idx} route={myRoute} />
        })

        return ( 
            <div id="myDashboardContainer">
                <div className="dashboardWorkouts">
                    <h1>RECENT WORKOUTS</h1>
                    <ul>
                        {myWorkoutsToRender}
                    </ul>

                </div>

                <div className="dashboardRoutes">
                    <h1>RECENT ROUTES:</h1>
                    <ul className="parent">
                        {myRoutesToRender}
                    </ul>
                </div>
            </div>            
         );
    }
}
 
export default MyDashboard;