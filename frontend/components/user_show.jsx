import React from 'react';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getRoutes();
        this.props.getWorkouts();
    }


    render() {
        let user = this.props.users[this.props.userId];

        return ( 
            <div id="userShowContainer">
                <section className="userShowInfoCard">
                    <h2>{user.first_name}</h2>
                </section>
            </div>
         );
    }
}
 
export default UserShow;