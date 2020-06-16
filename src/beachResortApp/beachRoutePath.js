import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './component/home';
import Rooms from './component/rooms';
import SingleRoom from './component/singleRoom';
import Error from './component/error'
import Navbars from './component/navbars';
import 'bootstrap/dist/css/bootstrap.min.css';

function BeachRoutePath() {
    return (
        <div>
            <Router>
            <Navbars></Navbars>
                <Route exact path="/" component={Home}></Route>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/rooms" component={Rooms}></Route>
                    <Route exact path="/singleRoom" component={SingleRoom}></Route>
                    <Route exact path="/error" component={Error}></Route>
                </div>
            </Router>
        </div>
    )
}
export default BeachRoutePath;