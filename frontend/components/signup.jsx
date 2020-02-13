import React from 'react';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:"", password:"",first_name:"",last_name:"",birthday: undefined, gender: undefined, country: "", subscribed: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        //create the user
        this.props.processForm(this.state);
        //login the user
        debugger
        this.props.login({email: this.state.email, password: this.state.password });
    }

    demoLogin() {
        this.props.demoLogin({ email: "demo_user@fake.com", password: "password", first_name: "Demo", last_name: "User", country: "United States", gender: "Female" });
    }

    //PREVIOUS VERSION
    // renderErrors() {
    //     debugger
    //     if (this.props.errors) {
    //         return (
    //             <ul>
    //                 {this.props.errors.map((error, i) => (
    //                     <li className="sessionError" key={`error-${i}`}>
    //                         Error {i+1} -- {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     } else {
    //         return "";
    //     }
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() { 
        debugger
        let countries = [
            <option key="US" value="United States">United States</option>,
            <option key="CA" value="Canada">Canada</option>,
            <option key="MX" value="Mexico">Mexico</option>
        ];

        let renderErrors = (this.props.errors) ?
            (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="sessionError" key={`error-${i}`}>
                            Error {i + 1} -- {error}
                        </li>
                    ))}
                </ul>
            )
            :
            ("")

        return ( 
            <div id="signupFormContainer">
                <div className="sessionErrors">
                    {renderErrors}
                </div>
                <div className="loginLinkContainer">
                    <Link to="/login" className="loginLink">LOGIN</Link>
                </div>
                <a className="facebookSignIn" onClick={this.demoLogin}>DEMO USER</a>
                <p>OR</p>

                <form className="signupForm" onSubmit={this.handleSubmit}>
                        <input placeholder="First Name" type="text" value={this.state.first_name} onChange={this.update("first_name")} />
                        <input placeholder="Last Name" type="text" value={this.state.last_name} onChange={this.update("last_name")} />
                        <input placeholder="Email" type="text" value={this.state.email} onChange={this.update("email")} />
                        <input placeholder="Password (at least 6 char)" type="password" value={this.state.password} onChange={this.update("password")} />
                        
                        {/* 
                         IMPROVEMENT: max set to be ~18 years ago so that minors can't sign up 
                        <input type="date" value={this.state.birthday} onChange={this.update("birthday")}/> */}

                    {/* can use onChange in same way for non-text types? */}
                        {/* <input placeholder="Male" type="radio" name="gender" value="M" onChange={this.update("gender")}/>Male
                        <input placeholder="Female" type="radio" name="gender" value="F" onChange={this.update("gender")}/>Female */}

                    {/* IMPROVEMENT: better to have dropdown of countries - https://www.w3schools.com/tags/att_option_value.asp */}
                        <select placeholder="Your Country" type="text" value={this.state.country} onChange={this.update("country")}>{countries}</select>


                    {/*  NEED TO ADD THIS CHECKBOX? */}
                    {/* <label>Subscribe to our annoying emails?
                        <input type="checkbox" value={this.state.subscribed} onChange={this.update("subscribed")}/>
                    </label> */}

                    <input className="signupButton" type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}
 
export default SignUp;


//LIST OF COUNTRIES TO ADD:
// "Afghanistan"
            // Albania
            // Algeria
            // Andorra
            // Angola
            // Antigua and Barbuda
            // Argentina
            // Armenia
            // Australia
            // Austria
            // Azerbaijan
            // Bahamas
            // Bahrain
            // Bangladesh
            // Barbados
            // Belarus
            // Belgium
            // Belize
            // Benin
            // Bhutan
            // Bolivia
            // Bosnia and Herzegovina
            // Botswana
            // Brazil
            // Brunei
            // Bulgaria
            // Burkina Faso
            // Burundi
            // Côte d'Ivoire
            // Cabo Verde
            // Cambodia
            // Cameroon
            // Canada
            // Central African Republic
            // Chad
            // Chile
            // China
            // Colombia
            // Comoros
            // Congo(Congo - Brazzaville)
            // Costa Rica
            // Croatia
            // Cuba
            // Cyprus
            // Czechia(Czech Republic)
            // Democratic Republic of the Congo
            // Denmark
            // Djibouti
            // Dominica
            // Dominican Republic
            // Ecuador
            // Egypt
            // El Salvador
            // Equatorial Guinea
            // Eritrea
            // Estonia
            // Eswatini(fmr. "Swaziland")
            // Ethiopia
            // Fiji
            // Finland
            // France
            // Gabon
            // Gambia
            // Georgia
            // Germany
            // Ghana
            // Greece
            // Grenada
            // Guatemala
            // Guinea
            // Guinea - Bissau
            // Guyana
            // Haiti
            // Holy See
            // Honduras
            // Hungary
            // Iceland
            // India
            // Indonesia
            // Iran
            // Iraq
            // Ireland
            // Israel
            // Italy
            // Jamaica
            // Japan
            // Jordan
            // Kazakhstan
            // Kenya
            // Kiribati
            // Kuwait
            // Kyrgyzstan
            // Laos
            // Latvia
            // Lebanon
            // Lesotho
            // Liberia
            // Libya
            // Liechtenstein
            // Lithuania
            // Luxembourg
            // Madagascar
            // Malawi
            // Malaysia
            // Maldives
            // Mali
            // Malta
            // Marshall Islands
            // Mauritania
            // Mauritius
            // Mexico
            // Micronesia
            // Moldova
            // Monaco
            // Mongolia
            // Montenegro
            // Morocco
            // Mozambique
            // Myanmar(formerly Burma)
            // Namibia
            // Nauru
            // Nepal
            // Netherlands
            // New Zealand
            // Nicaragua
            // Niger
            // Nigeria
            // North Korea
            // North Macedonia
            // Norway
            // Oman
            // Pakistan
            // Palau
            // Palestine State
            // Panama
            // Papua New Guinea
            // Paraguay
            // Peru
            // Philippines
            // Poland
            // Portugal
            // Qatar
            // Romania
            // Russia
            // Rwanda
            // Saint Kitts and Nevis
            // Saint Lucia
            // Saint Vincent and the Grenadines
            // Samoa
            // San Marino
            // Sao Tome and Principe
            // Saudi Arabia
            // Senegal
            // Serbia
            // Seychelles
            // Sierra Leone
            // Singapore
            // Slovakia
            // Slovenia
            // Solomon Islands
            // Somalia
            // South Africa
            // South Korea
            // South Sudan
            // Spain
            // Sri Lanka
            // Sudan
            // Suriname
            // Sweden
            // Switzerland
            // Syria
            // Tajikistan
            // Tanzania
            // Thailand
            // Timor - Leste
            // Togo
            // Tonga
            // Trinidad and Tobago
            // Tunisia
            // Turkey
            // Turkmenistan
            // Tuvalu
            // Uganda
            // Ukraine
            // United Arab Emirates
            // United Kingdom
            // United States of America
            // Uruguay
            // Uzbekistan
            // Vanuatu
            // Venezuela
            // Vietnam
            // Yemen
            // Zambia
            // Zimbabwe
