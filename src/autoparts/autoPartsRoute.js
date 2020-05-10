import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Home from './home';
import Parts from './parts';
import Navbars from './navbars'
class AutoPartsRoute extends React.Component {

    render () {
        return (
            <div className = "App">
                <Router>
                    <Navbars></Navbars>
                    <Route exact path = "/" component = {Home}></Route>
                    <div class="container">
                        <Route exact path = "/login" component = {Login}></Route>
                        <Route exact path = "/home" component = {Home}></Route>
                        <Route exact path = "/parts" component = {Parts}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default AutoPartsRoute;
