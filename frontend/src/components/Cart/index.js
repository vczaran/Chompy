import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));
    const products = useSelector(state => state.products);
    const [show, setShow] = useState(false);
    const [cartQty, setCartQty] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let quant = 0;
        let price = 0;

        if (currentUser && cart.length) {
            cart.forEach((item) => {
                quant += item.quantity;
                price += products[item.productId].price * item.quantity;
                setCartQty(quant);
                setTotal(price.toFixed(2));
            })
            } else {
                setCartQty(0);
                setTotal(0);
            }
        }, [cart])

    if (currentUser && cart.length) {
        return (
            <div className="cart"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i>
                <span className="cart-badge">{cartQty}</span>
                <Link to="/cart"><h1>cart</h1></Link>

                {show && 
                    <ul>
                       <h2>Subtotal: {total}</h2>
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
                    <span className="cart-badge">{cartQty}</span>
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