import React from 'react';

//check out: https://momentjs.com/

class LogWorkout extends React.Component {
    constructor(props) {
        super(props);
        //need to add route, user_id, start_time, end_time
        this.state = {route_completed_id: "", route: undefined, avg_pace: "", user_id: this.props.currentUser, completed_date: undefined, name: "", notes: "", duration: undefined};
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fetchRoute = this.fetchRoute.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //store the full route temporarily in state to get the id before deleting it
        // this.state.route_completed_id = this.state.route.id;
        // delete this.state.route;
        // this.props.getRoute(this.state.route_completed_id)
        // this.props.createWorkout(this.state);

        
        //hard_coding duration for now:
        // let time = new Date();
        // this.state.duration = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` 
    
        //set avg_pace -- dummy value for distance of 10.0 for now
        
        
        this.state.avg_pace = (5.2);

        debugger;
        this.props.createWorkout(this.state);

        //redirect back to /Home to see feed
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

// //HANDLE ERRORS - refer to 'signup.jsx' for inspiration

    render() { 
        let possibleRoutes = [
            <option value="" disabled selected>Completed Route</option>,
            <option key="1" value="1">Route 1</option>,
            <option key="2" value="2">Route 2</option>,
            <option key="3" value="3">Route 3</option>
        ]

        return ( 
            <div id = "createWorkoutFormContainer" >
                <h1>Log your completed workout</h1>
                <form className="createWorkoutForm" onSubmit={this.handleSubmit}>

                    <input className="regularFields" type="text" placeholder="Workout Name" value={this.state.name} onChange={this.update("name")}/>

                    <label className="dateInputContainer" >Date:    
                        <input className="dateInput" type="date" value={this.state.completed_date} onChange={this.update("completed_date")} />
                    </label>
                    <select placeholder="Completed Route" type="text" value={this.state.route_completed_id} onChange={this.update("route_completed_id")}>{possibleRoutes}</select>
                    <textarea className="regularFields" placeholder="How Did It Go?" value={this.state.notes} onChange={this.update("notes")} />
                    <input className="regularFields" placeholder="Duration" type="time" value={this.state.duration} onChange={this.update("duration")} />
                    <input className="createWorkoutButton" type="submit" value="Create Workout" />
                </form>
            </div>
         );
    }
}
 
export default LogWorkout;