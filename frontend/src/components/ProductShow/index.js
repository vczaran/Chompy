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
        <header id="category">{product.category}</header>
        <div className="product-show-page">
            <img id="product-show-img" src={product.imageUrl} />
            <div className="product-show-info">
                <h1>{product.name}</h1>
                <p>{product.rating}</p>
                <p id="price">${product.price}</p>
                <p>{product.flavorOptions}</p>
                <p>{product.sizeOptions}</p>
            </div>
            <div className="dropdown-buttons-container-show">
                <label>Quantity
                <select className="quantity-dropdown" name="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                <button className="add-to-cart-from-show">Add to Cart</button>
                </label>
            </div>
        </div>
        <hr className="show-divider"/>
        <div className="prodcut-show-details">
                <h2>About This Item</h2>
                <p>{product.details}</p>
        </div>
        </>
    )
}


export default ProductShow