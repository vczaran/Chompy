import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIndexItem from "./CartIndexItem";
import { useState } from "react";
import './Cart.css';
import { checkout, resetCart } from "../../store/cart";

export default function CartIndex () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    // const items = products.select(id === cart.productId);
    // const items = products.map ( item => item.id )

    function handleCheckout () {
        dispatch(resetCart());
        dispatch(checkout(currentUser.id));
    }

    if (cart && Object.keys(cart).length) {
    return (
        < div className="cart-page">
            <div className="cart-index">
                <h1>Shopping Cart</h1>
                <ul className="cart-items-list"> 
                    {Object.values(cart).map( item => <CartIndexItem item={item}/>)}
                </ul>  
            </div>
            <div className="checkout-container">
                <h1>Subtotal $50</h1>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
    } else {
        return (
        <div className="empty-cart-page">
            <h1>Your cart is empty.</h1>
            <img src="/images/empty-box.webp" alt ="box"></img>
            <Link to="/">Continue Shopping</Link>
        </div>
        )
    }

}
