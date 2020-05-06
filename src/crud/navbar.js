import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbars extends React.Component {
    render() {
        const regLink =  (
            <ul className = "navbar-nav">
                <li className = "nav-item">
                    <Link to = "/login" className="nav-link">Login</Link>
                </li>
                <li className = "nav-item">
                    <Link to = "/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )

        return(
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button classname = "navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className = "nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(Navbars);