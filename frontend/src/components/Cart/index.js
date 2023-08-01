import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart);
    const [show, setShow] = useState(false);

    if (currentUser) {
        return (
            <div className="cart"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                <i class="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
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
                    <i class="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
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