import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import './ProductShow.css';

function ProductShow () {
    const dispatch = useDispatch();
    const productId = useParams().productId;
    const product = useSelector(state => state.products?.[productId]);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    if (!product) {
        return null
    }

    return (
        <>
            <header>{product.category}</header>
            <img id="product-show-img" src={product.imageUrl} />
            <div className="product-show-details">
                <h1>{product.name}</h1>
                <p>{product.rating}</p>
                <p>${product.price}</p>
                <p>{product.flavor_options}</p>
                <p>{product.size_options}</p>
                <p>{product.details}</p>
            </div>
        </>
    )
}


export default ProductShow