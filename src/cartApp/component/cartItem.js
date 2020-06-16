import React from 'react'

const CartItem = ({ image, title, price, amount }) => {

    return (
        <div className="cart-item">
            <img src={image} alt={title}></img>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn">remove</button>  
            </div>
        </div>
    )
}
export default CartItem;
