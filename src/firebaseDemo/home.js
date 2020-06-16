import React from 'react'
import fire from '../config/fire'

class Home extends React.Component {

    logout(){
        fire.auth().signOut();
    }

    render() {
        return(
            <div>
                <p>Logged In Successfully</p>
                <button onClick = {this.logout}>Logout</button>
                </div>
            
        )
    }
}
export default Home;