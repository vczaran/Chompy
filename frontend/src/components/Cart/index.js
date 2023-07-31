import { useDispatch, useSelector } from "react-redux";


export default function Cart () {
    let currentUser = useSelector(state => state.session.user);
    // const userId  = currentUser.id;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);

    // useEffect ( () => {
    //     dispatch(fetchCartItems(currentUser.id));
    // }, [currentUser])
    
    // if  (!currentUser) {
    //     currentUser = null;
    // }
  
    // if (currentUser && !cart.length) {
    //     dispatch(fetchCartItems(currentUser.id));
    // } else {
    //     return cart;
    // }

    if (currentUser) {
        //  useEffect ( () => {
        //      dispatch(fetchCartItems());
        //  }, [])
    return (
        <>
            <h1>I am ze cart</h1>
            <p>{Object.values(cart).map((item) => {return products[item.productId]?.name})}</p>
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