import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Register from './register';
import Navbars from './navbars'
import Employee from './employee';
import Home from './home';

class RoutePath extends React.Component {
  render () {
    return (
        <Router>
            <div className = "App">
                <Navbars></Navbars>
                <Route exact path = "/" component = {Home}></Route>
                <div class="container">
                <Route exact path = "/home" component = {Home}></Route>
                    <Route exact path = "/login" component = {Login}></Route>
                    <Route exact path="/register" component = {Register}></Route>
                    <Route exact path="/employee" component = {Employee}></Route>
                </div>
            </div>
            
        </Router>
    )
}
}
export default RoutePath;
