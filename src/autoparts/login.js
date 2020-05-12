import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import './login.css';
import { checkUserExists, addUserDetails } from '../crud/userFuction';

class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            address : "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,Chennai",
            privilagestatus : "Platinum",
            userName  : '',
            password : ''
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
        //this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // onChangePassword(e){
    //     this.setState({
    //         password : e.target.password
    //     })
    // }

    login(e){
        //alert("comming")
        e.preventDefault();

        console.log("UserName : " ,this.state.userName)
        console.log("Password : " ,this.state.password)

        const user = {
            userName : this.state.userName,
            password : this.state.password
        }

        console.log("UserName : " ,user.userName)
        console.log("Password : " ,user.password)
        
        let userExists = checkUserExists(user.userName);
        console.log("User Msg : " ,userExists);

        if(userExists){
            alert("user is already exists");
        }else{
            let userMsg = addUserDetails(user);
            console.log("User Msg : " ,userMsg)

            if(userMsg === "Added Succesfully"){
                this.props.history.push({
                    pathname : '/employee',
                    address : this.state.address,
                    privilagestatus : this.state.privilagestatus
                })
            }
        }
        
    }

    render () {
        return (
            <div>
                <Form className="login-form" onSubmit = {this.login}>  
                    <h1>Login</h1>  
                    <FormGroup className="mb-3">
                        <Label>UserName</Label>
                        <Input type="text" placeholder="UserName" name="userName" id="userName" value = {this.state.userName} onChange = {this.onChange}/>
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" name="password" id="password" value = {this.state.password} onChange = {this.onChange}/>  
                    </FormGroup>  
                    <Button value = "submit">Login</Button>
                </Form>
                {/* <Employee address = {this.state.address} privilagestatus = {this.state.privilagestatus}></Employee> */}
            </div>
        )
    }
}

export default Login;