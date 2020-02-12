import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Splash from './splash';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        return ( 
            <div id="appContainer">
                <NavBar />
                    {/* turnery statement if session does NOT exist, show landingImg  */}
                <Splash />
                    {/* everything else lol */}
                <Footer />
            </div>
        );
    }
}
 
export default App;