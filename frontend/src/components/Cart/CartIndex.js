import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIndexItem from "./CartIndexItem";
import { useState, useEffect } from "react";
import './Cart.css';
import { checkout, resetCart } from "../../store/cart";

export default function CartIndex () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

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

    function handleCheckout () {
        dispatch(resetCart());
        dispatch(checkout(currentUser.id));
    }

    if (cart && cart.length) {
    return (
        < div className="cart-page">
            <div className="cart-index">
                <h1>Shopping Cart</h1>
                <ul className="cart-items-list"> 
                    {cart.map( item => <CartIndexItem item={item}/>)}
                </ul>  
            </div>
            <div className="checkout-container">
                <div className="checkout-headers">
                    <h1>Subtotal</h1>
                    <h1>${total}</h1>
                    <h3>{cartQty} items</h3>
                </div>
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
