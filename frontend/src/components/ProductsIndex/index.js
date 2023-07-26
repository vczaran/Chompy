import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { Link } from "react-router-dom";
import './ProductsIndex.css';

function ProductsIndex() {
    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

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

    const ProductList = products.map(product => {
        return (
            <li key={product.id}>
                <img src={product.imageUrl} />
                <Link id="link-to-show-from-product" to={`/products/${product.id}`}><p>{product.name}</p></Link>
                <Stars />
                <p>{product.rating}</p>
                <p id="index-price">${product.price}</p>
                <button className="add-to-cart-from-splash">Add to Cart</button>
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