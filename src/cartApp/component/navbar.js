import React from 'react'
import '../cartRoute.css'

function Navbar() {
    return(
        <div>
            <header>
                <div className = "overlay">
                <nav>
                    <h2>Shopping Cart</h2>
                    <ul>
                        <li><a href = "#">Home</a></li>
                        <li><a href = "#">About</a></li>
                        <li className = "cart-image">
                            <a href = "#">
                                <ion-icon name="basket"></ion-icon><span>0</span>
                            </a>
                        </li>
                        <li><a href = "#">Logout</a></li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    )
}
export default Navbar;