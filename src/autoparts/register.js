import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './register.css'
import { registerUserDetails, checkUserExists } from '../crud/userFuction';

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        }

        this.onChange = this.onChange.bind(this);
        this.register = this.register.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register() {
        //alert("register")
        console.log("UserName : ", this.state.firstName)
        console.log("Password : ", this.state.password)
        console.log("ConfirmPassword : ", this.state.confirmPassword)

        const user = {
            userName: this.state.firstName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        if (user.userName !== "" && !user.password !== "") {

            let userExists = checkUserExists(user.userName);
            console.log("User Msg : " ,userExists);
            if(userExists){
                alert("user is already exists");
            }else{
                let regMsg = registerUserDetails(user);
                console.log("User Msg : ", regMsg)
    
                if (regMsg === "Registered Succesfully") {
                    this.props.history.push({
                        pathname: '/login',
                        // address : this.state.address,
                        // privilagestatus : this.state.privilagestatus
                    })
                }
            }  
        } else {
            if (user.userName === "" || user.userName === ''){
                alert("FirstName is Mandatory");
            }else if(user.password === ""){
                alert("Password is Mandatory");
            }else if(user.confirmPassword === ""){
                alert("Confirm Password is Mandatory");
            }
        }
    }

    render() {
        return (
            <div>
                <Form className="register-form" onSubmit={this.register}>
                    <h1>Register</h1>
                    <FormGroup className="mb-3">
                        <Label>FirstName</Label>
                        <Input type="text" placeholder="FirstName" name="firstName" id="firstName" value={this.state.firstName} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label>LastName</Label>
                        <Input type="text" placeholder="LastName" name="lastName" id="lastName" value={this.state.lastName} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label>Confirm Password</Label>
                        <Input type="text" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} />
                    </FormGroup>
                    <Button value="submit">Register</Button>
                </Form>
                {/* <Employee address = {this.state.address} privilagestatus = {this.state.privilagestatus}></Employee> */}
            </div>
        )
    }
}
export default Register;