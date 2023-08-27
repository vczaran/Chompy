import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));
    const products = useSelector(state => state.products);
    const [show, setShow] = useState(false);


    let quant = 0;
    let price = 0;
    if (currentUser && cart.length) {
        cart.forEach((item) => {
            quant += parseFloat(item?.quantity);
            price += parseFloat((products[item.productId]?.price * item?.quantity));
        })
    }
      

    if (currentUser && cart.length) {
        return (
            <div className="cart"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                <div className="icon-and-badge">
                    <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
                    <span className="cart-badge">{quant}</span>
                </div>
                <Link to="/cart"><h1>cart</h1></Link>

                {show && 
                    <ul>
                        <div className="cart-drop-headers">
                            <h2>Cart Subtotal: ${price?.toFixed(2)}</h2>
                            <Link to="/cart">Proceed to Checkout</Link>
                       </div>
                      {cart.map( item => <CartItem item={item}/>)}
                    </ul>  
                }     
            </div>
        )
        } else {
            return (
                <div className="cart"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                    <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
                    <span className="cart-badge">{quant}</span>
                    <Link to="/cart"><h1>cart</h1></Link>

                    {show &&
                        <ul>
                            Your cart is empty.
                        </ul>
                    }
                </div>
        )
    }
}