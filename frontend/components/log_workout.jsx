import React from 'react';
import {calculateAvgPace} from '../util/date_util';

//check out: https://momentjs.com/

class LogWorkout extends React.Component {
    constructor(props) {
        super(props);
        //need to add route, user_id, start_time, end_time
        this.state = this.props.workout;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateAvgPace = this.updateAvgPace.bind(this);
        this.possibleRoutes = [];
    }

    componentDidMount() {
        this.props.getRoutes();
    }

    handleSubmit(e) {
        e.preventDefault();
        //store the full route temporarily in state to get the id before deleting it
        // this.state.route_completed_id = this.state.route.id;
        // delete this.state.route;
        // this.props.getRoute(this.state.route_completed_id)

        
        // debugger;

        // this.setState({avg_pace: avgPace});

        // debugger;

        //AJAX REQUEST TO ADD WORKOUT TO DATABASE
        this.props.createWorkout(this.state).then(() => this.props.history.push("/home/feed"))
        
        //.then(alert("New Workout Successfully Logged!"));;
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }


    // NEED THIS:
    updateAvgPace () {
        // only can update avg_pace if a route has been selected
        return e => {
            // debugger
            this.setState({distance: state.distance});
            // debugger
            if (this.state.route_completed_id) {
                let chosenRoute = undefined;
                for (let index = 0; index < this.props.routes.length; index++) {
                    if (this.props.routes[index].id.toString() === this.state.route_completed_id) {
                        chosenRoute = this.props.routes[index];
                    }
                }
                // debugger
                let routeDistance = parseFloat(chosenRoute.distance); // ex: -> 5.8
                let avgPace = calculateAvgPace(e.currentTarget.value, routeDistance);
                this.setState({avg_pace: avgPace})
            }
        } 
    }

// //HANDLE ERRORS - refer to 'signup.jsx' for inspiration

    render() { 
        let possibleRoutes = [
            <option key="1"  value="" disabled selected>Completed Route</option>
        ]

        if (this.props.routes.length > 0) {
            let allRoutes = Object.values(this.props.routes).map((route, idx) => {
                return <option key={idx} value={route.id}>{route.name}</option>
            });
            possibleRoutes = possibleRoutes.concat(allRoutes);
        }
        
        let renderErrors = (this.props.errors) ?
            (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="sessionError" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
            :
            ("")

        return ( 
            <div id = "createWorkoutFormContainer" >
                <h1>Log your completed workout</h1>
                <form className="createWorkoutForm" onSubmit={this.handleSubmit}>

                    <input required className="regularFields" type="text" placeholder="Workout Name" value={this.state.name} onChange={this.update("name")}/>

                    <label className="dateInputContainer" >Date:    
                        <input required className="dateInput" type="date" value={this.state.completed_date} onChange={this.update("completed_date")} />
                    </label>
                    <select required placeholder="Completed Route" type="text" value={this.state.route_completed_id} onChange={this.update("route_completed_id")}>{possibleRoutes}</select>
                    <textarea required className="regularFields" placeholder="How Did It Go?" value={this.state.notes} onChange={this.update("notes")} />

                    <label >Duration:
                        <input required className="startTime" placeholder="Duration" type="time" value={this.state.duration} onChange={this.updateAvgPace()} />
                    </label>
                    <input className="createWorkoutButton" type="submit" value="Create Workout" />
                    <div className="sessionErrors">
                        {renderErrors}
                    </div>
                </form>
            </div>
         );
    }
}
 
export default LogWorkout;