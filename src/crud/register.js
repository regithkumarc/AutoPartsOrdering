import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

class Register extends React.Component {
    
    constructor(props){
        super(props)
        this.register = this.register.bind(this);

        this.state = {
            name : "regith"
        }
    }
    register (e) {
        //this.props.history.push('/employee:{this.state.name}')
        this.props.history.push({
            pathname: '/employee',
            name: "regith"
          });
    }
    render() {
        return(
            <div>
                <Form className="login-form" onSubmit = {this.register}>  
                    <h1>Register</h1>  
                    <FormGroup className="mb-3">
                        <Label>FirstName</Label>
                        <Input type="text" placeholder="FirstName" name="firstName" id="firstName" />
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>LastName</Label>
                        <Input type="text" placeholder="LastName" name="lastName" id="lastName" />  
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" name="password" id="password" />  
                    </FormGroup> 
                    <FormGroup className="mb-3">
                        <Label>Confirm Password</Label>
                        <Input type="text" placeholder="Confirm Password" name="confirmpassword" id="confirmpassword" />  
                    </FormGroup> 
                    <Button value="submit">Register</Button>
                </Form>
                {/* <Employee address = {this.state.address} privilagestatus = {this.state.privilagestatus}></Employee> */}
            </div>
        )
    }
}
export default Register;