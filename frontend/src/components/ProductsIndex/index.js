import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import './ProductsIndex.css';

function ProductsIndex() {
    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const ProductList = products.map(product => {
        return (
            <li key={product.id}>
                <img src={product.imageUrl} />
                <p>{product.name}</p>
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