import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIndexItem from "./CartIndexItem";
import './Cart.css';
import { checkout, resetCart } from "../../store/cart";

export default function CartIndex () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    let quant = 0;
    let price = 0;
    if (currentUser && cart.length) {
        cart.forEach((item) => {
            quant += parseFloat(item.quantity);
            price += (parseFloat(products[item.productId].price * item.quantity));
        })
    }


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
                    <h1>${price}</h1>
                    <h3>{quant} items</h3>
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
