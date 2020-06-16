import React from 'react'
import fire from '../config/fire';
import Home from './home';
import LoginAuth from './loginAuth';

class FireApp extends React.Component {

    constructor(){
        super();
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        console.log("comming")
        fire.auth().onAuthStateChanged((user) => {
            console.log("user",user)
            if(user){
                this.setState({user})
            }else{
                this.setState({user : null})
            }
        })
    }

    render() {
        return(
            <div>
                {this.state.user ? (<Home></Home>) : (<LoginAuth></LoginAuth>)}
            </div>
        )
    }
}
export default FireApp;