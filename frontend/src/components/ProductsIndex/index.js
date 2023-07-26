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
                <p>{product.name}</p>
                <img src={product.imageUrl} />
                <p>{product.rating}</p>
                <p>{product.price}</p>
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