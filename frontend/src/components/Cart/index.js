import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../store/cart";

export default function Cart () {
    // const currentUser = useSelector(state => state.session.user);
    // const userId  = currentUser.id;
    // const dispatch = useDispatch();
    // const cart = useSelector(state => state.cart);


    // useEffect ( () => {
    //     dispatch(fetchCartItems());
    // }, [currentUser])
    
    // if  (!currentUser) {
    //     return null;
    // }
  
    // if (currentUser) {
    //     dispatch(fetchCartItems(currentUser.id));
    // } else {
    //     return cart;
    // }

    return (
        <>
            <h1>I am ze cart</h1>
            {/* <p>{Object.values(cart).map((item) => "I am item")}</p> */}
        </>
    )
}