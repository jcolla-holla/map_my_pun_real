import React from 'react';
import {calculateAvgPace} from '../util/date_util';

class LogWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.workout;
        this.handleSubmit = this.handleSubmit.bind(this);

        //likely don't neeed this:
        // this.updateAvgPace = this.updateAvgPace.bind(this);
        this.possibleRoutes = [];
        this.actionSent = false;
    }

    componentDidMount() {
        this.props.getRoutes();
    }

    setAvgPace () {
        //improvement: array to object
        let chosenRoute = undefined;
        if (this.state.route_completed_id) {
            for (let index = 0; index < this.props.routes.length; index++) {
                if (this.props.routes[index].id.toString() === this.state.route_completed_id) {
                    chosenRoute = this.props.routes[index];
                }
            }
        }

        let routeDistance = chosenRoute.distance;

        let durationVal = this.state.hoursDuration + ":" + this.state.minutesDuration + ":" + this.state.secondsDuration;
        this.setState({ duration: durationVal })

        // delete these temporary values from state before submitting:
        delete this.state.hoursDuration;
        delete this.state.minutesDuration;
        delete this.state.secondsDuration;

        // let avgPace = calculateAvgPace(this.state.duration, routeDistance);
        let avgPaceVal = calculateAvgPace(durationVal, routeDistance);
        this.setState({avg_pace: avgPaceVal})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setAvgPace();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() { 

        //once avg_pace is set, can trigger POST request.  Not in handlesubmit() function b/c must re-render in order for state to be updated as expected
        if (this.state.avg_pace && this.actionSent === false) {
            this.actionSent = true;
            this.props.createWorkout(this.state).then(() => this.props.history.push("/home/feed")).then(alert("New Workout Successfully Logged!"));;;
        }

        //IMPROVEMENT:: array definitions may be better suited going in constructor so don't have to be generated every render
        let possibleRoutes = [
            <option key="completedRoutePlaceholder"  value="" disabled selected>Completed Route</option>
        ]

        //asumption that a workout won't go longer than 6 hours
        let hoursPicklist = [
            <option key="hour0" value="0">0 hours</option>,
            <option key="hour1" value="01">1 hour</option>,
            <option key="hour2" value="02">2 hours</option>,
            <option key="hour3" value="03">3 hours</option>,
            <option key="hour4" value="04">4 hours</option>,
            <option key="hour5" value="05">5 hours</option>,
            <option key="hour6" value="06">6 hours</option>
        ];

        let minutesPicklist = []
        for (let index = 0; index <= 60; index++) {
            if (index === 1) {
                minutesPicklist.push(<option key={`minute${index}`} value={index}>{index} minute</option>)
            } else if (1 < index < 10) {
                minutesPicklist.push(<option key={`minute${index}`} value={`0${index}`}>{index} minutes</option>)
            } else {
                minutesPicklist.push(<option key={`minute${index}`} value={index}>{index} minutes</option>)
            }
        }
        
        let secondsPicklist = []
        for (let i = 0; i <= 60; i++) {
            if (i === 1) {
                secondsPicklist.push(<option key={`second${i}`} value={i}>{i} second</option>)
            } else if (1 < i < 10) {
                secondsPicklist.push(<option key={`second${i}`} value={`0${i}`}>{i} second</option>)
            } else {
                secondsPicklist.push(<option key={`second${i}`} value={i}>{i} seconds</option>)
            }
        }

        if (this.props.routes.length > 0) {
            let allRoutes = Object.values(this.props.routes).map((route, idx) => {
            return <option key={idx} value={route.id}>{route.name} - Distance: {route.distance} - Activity: { route.activity_type}</option>
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

                    <section className="part1">
                        <input required className="regularFields" type="text" placeholder="Workout Name" value={this.state.name} onChange={this.update("name")}/>
                        <select className="completedRoute" required placeholder="Completed Route" type="text" alue={this.state.route_completed_id} onChange={this.update("route_completed_id")}>{possibleRoutes}</select>
                    </section>


                    <textarea required className="regularFields part2" placeholder="How Did It Go?" value={this.state.notes} onChange={this.update("notes")} />

                    <section className="part3">
                        <label className="dateInputContainer" >
                            <p className="dateInputTitle"> Workout Date:</p>
                            <input required className="dateInput" type="date" value={this.state.completed_date} onChange={this.update("completed_date")} />
                        </label>
                        <section className="durationSection">
                            <label className="durationSectionTitle">Duration:</label> 
                            <div className="durationFields">
                                <select className="durationField" required type="text" placeholder="Hours" value={this.state.hoursDuration} onChange={this.update("hoursDuration")}>{hoursPicklist}</select>
                                <select className="durationField" required type="text" placeholder="Minutes" value={this.state.minutesDuration} onChange={this.update("minutesDuration")}>{minutesPicklist}</select>
                                <select className="durationField"  required type="text" placeholder="Seconds" value={this.state.secondsDuration} onChange={this.update("secondsDuration")}>{secondsPicklist}</select>
                            </div>
                        </section>
                    </section>
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