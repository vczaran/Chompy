import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIndexItem from "./CartIndexItem";
import './Cart.css';

export default function CartIndex () {
    const cart = useSelector(state => state.cart);
    
    if (Object.keys(cart).length) {
    return (
        <ul className="cart-index">
            {Object.values(cart).map( item => <CartIndexItem item={item}/>)}
        </ul>  
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
