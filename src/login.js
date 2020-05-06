import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Home from './home';

class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            address : "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,Chennai",
            privilagestatus : "Platinum"
        }
    }
    render () {
        return (
            <div>
                <Form className="login-form">  
                    <h1>Login</h1>  
                    <FormGroup className="mb-3">
                        <Label>UserName</Label>
                        <Input type="text" placeholder="UserName" name="userName" id="userName" />
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" name="password" id="password" />  
                    </FormGroup>  
                    <Button>Login</Button>
                </Form>
                <Home address = {this.state.address} privilagestatus = {this.state.privilagestatus}></Home>
            </div>
        )
    }
}

export default Login;