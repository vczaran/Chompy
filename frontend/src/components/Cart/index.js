import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart);
    const [show, setShow] = useState(false);
    // const [cartQty, setCartQty] = useState(0);

    // useEffect(() => {
    //     setCartQty(cartQty + cart.length);
    // }, [cart.length])

    if (currentUser) {
        return (
            <div className="cart"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
                {/* <span className="cart-badge">{cartQty}</span> */}
                <Link to="/cart"><h1>cart</h1></Link>

                {show && 
                    <ul>
                      {Object.values(cart).map( item => <CartItem item={item}/>)}
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
                    {/* <span className="cart-badge">{cartQty}</span> */}
                    <h1>cart</h1>

                    {show &&
                        <ul>
                            Your cart is empty.
                        </ul>
                    }
                </div>
        )
    }
}