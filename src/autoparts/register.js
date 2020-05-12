import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './register.css'

class Register extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            firstName : '',
            lastName :'',
            password : '',
            confirmPassword : ''
        }

        this.onChange = this.onChange.bind(this);
        this.register = this.register.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value})
    }

    register(){
        alert("register")
    }

    render() {
        return (
            <div>
                <Form className="register-form" onSubmit={this.register}>
                    <h1>Register</h1>
                    <FormGroup className="mb-3">
                        <Label>FirstName</Label>
                        <Input type="text" placeholder="FirstName" name="userName" id="firstName" value={this.state.firstName} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label>LastName</Label>
                        <Input type="text" placeholder="LastName" name="lastName" id="lastName" value={this.state.firstName} onChange={this.onChange} />
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