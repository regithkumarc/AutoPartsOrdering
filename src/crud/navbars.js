import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {searchEmployeeDetails} from './userFuction'

class Navbars extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            searchName : ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let userName = e.target.value;
        searchEmployeeDetails(userName)
    }
    render() {
        // const regLink =  (
        //     <ul className = "navbar-nav">
        //         <li className = "nav-item">
        //             <Link to = "/login" className="nav-link">Login</Link>
        //         </li>
        //         <li className = "nav-item">
        //             <Link to = "/register" className="nav-link">Register</Link>
        //         </li>
        //         <li className = "nav-item">
        //             <Link to = "/employee" className="nav-link">Employee</Link>
        //         </li>
        //     </ul>
        // )

        // const userLink =  (
        //     <ul className = "navbar-nav">
        //         <li className = "nav-item">
        //             <Link to = "/login" className="nav-link">Login</Link>
        //         </li>
        //         <li className = "nav-item">
        //             <Link to = "/register" className="nav-link">Register</Link>
        //         </li>
        //     </ul>
        // )

        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/employee" className="nav-link">Employee</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value = {this.state.searchName} onChange = {this.onChange} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    {/* {regLink} */}
                </div>
            </nav>
        )
    }
}
export default withRouter(Navbars);