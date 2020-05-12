import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Home from './home';
import Parts from './parts';
import Navbars from './navbars'
import Register from './register';
class AutoPartsRoute extends React.Component {

    render () {
        return (
            <div>
                <Router>
                    <Navbars></Navbars>
                    <Route exact path = "/" component = {Home}></Route>
                    <div>
                        <Route exact path = "/login" component = {Login}></Route>
                        <Route exact path = "/register" component = {Register}></Route>
                        <Route exact path = "/home" component = {Home}></Route>
                        <Route exact path = "/parts" component = {Parts}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default AutoPartsRoute;
