import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";


export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);

    if (currentUser) {
        return (
            <>
                <h1>I am ze cart</h1>
                    <ul>
                      {Object.values(cart).map( item => <CartItem item={item}/>)}
                    </ul>       
            </>
        )
        } else {
            return (
                <>
                    <h1>I am ze cart</h1>
                    <p>Empty</p>
                </>
        )
    }
}