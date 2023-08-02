import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { Link } from "react-router-dom";
import './ProductsIndex.css';
import { addCartItem, updateCartItem } from "../../store/cart";
import { useHistory } from "react-router-dom";


function ProductsIndex() {
    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const Stars = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map(() => {
                    return (
                        <p id="star">&#9733;</p>
                    )  
                })}
            </div>
        )
    }

    function handleAdd (productId) {
        if (!currentUser) {
            history.push('/login')
        } else {
            let userId = currentUser.id;
            let product = cart[productId];

            // if (product) {
            //     setQuantity(quantity += 1);
            //     dispatch(updateCartItem(product.id, quantity));
            // } else {
                let cartItem = { quantity, userId, productId};
                dispatch(addCartItem(cartItem));
             }
            }

    // }

    const ProductList = products.map(product => {
    
        return (
            <li key={product.id}>
                <img src={product.imageUrl} />
                <Link id="link-to-show-from-product" to={`/products/${product.id}`}><p>{product.name}</p></Link>
                <Stars />
                <p>{product.rating}</p>
                <p id="index-price">${product.price}</p>
                <button className="add-to-cart-from-splash" onClick={() => handleAdd(product.id)}>Add to Cart</button>
            </li>
        );
    });

    return (
        <div>
            <ul className="products-index">
                {ProductList}
            </ul>
        </div>
    );

}


export default ProductsIndex;