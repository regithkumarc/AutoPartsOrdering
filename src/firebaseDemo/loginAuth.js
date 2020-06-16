import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../css/login.css'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from './common/firebaseMethods'

class LoginAuth extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId : 'test@gmail.com',
            password : 'test@111'
        }

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    // while login it will check in firebase user is available or not
    login(e) {
        // fire.auth()
        // .signInWithEmailAndPassword(this.state.emailId,this.state.password)
        // .then((u) => {
        //     console.log("login Success : " ,u)
        // }).catch((err) => {
        //     console.log("login Error : ",err)
        // })
        signInWithEmailAndPassword(this.state.emailId,this.state.password)
    }

      // while signUp it will check in firebase user is available or not
      //if available it will return msg user is already available
      //otherwise it will create new user
    signUp(e) {
        // fire.auth()
        // .createUserWithEmailAndPassword(this.state.emailId,this.state.password)
        // .then((u) => {
        //     console.log("signUp Success : " ,u)
        // }).catch((err) => {
        //     console.log("signUp Error : ",err)
        // })
        createUserWithEmailAndPassword(this.state.emailId,this.state.password);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
            <Form className="login-form">  
                <h1>Login</h1>  
                <FormGroup className="mb-3">
                    <Label>EmailId</Label>
                    <Input type="email" placeholder="EmailId" name="emailId" id="emailId" value = {this.state.emailId} onChange = {this.onChange}/>
                </FormGroup>  
                <FormGroup className="mb-3">
                    <Label>Password</Label>
                    <Input type="text" placeholder="Password" name="password" id="password" value = {this.state.password} onChange = {this.onChange}/>  
                </FormGroup>  
                <Button onClick = {this.login}>Login</Button>
                <Button onClick = {this.signUp}>SignUp</Button>
            </Form>
            </div>
        )
    }
}
export default LoginAuth;