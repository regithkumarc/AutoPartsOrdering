import React from 'react'
import './cartRoute.css'
import Navbar from './component/navbar'
import Products from './component/products'
import 'bootstrap/dist/css/bootstrap.min.css';

function CartRoute() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Products></Products>
        </div>
    )
}
export default CartRoute;