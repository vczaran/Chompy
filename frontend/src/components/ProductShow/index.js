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

    const FlavorOptions = product.flavorOptions.map(flavor => {
        return (
            <button>{flavor}</button>
        )
    })

    const SizeOptions = product.sizeOptions.map(size => {
        return (
            <button>{size}</button>
        )
    })


    return (
        <>
        <header id="category">{product.category}</header>
        <div className="product-show-page">
            <img id="product-show-img" src={product.imageUrl} />
            <div className="product-show-info">
                <h1>{product.name}</h1>
                <p>{product.rating}</p>
                <p id="price">${product.price}</p>
                <div className="flavors">Flavor
                    {FlavorOptions}
                </div>
                <div className="sizes">Size
                    {SizeOptions}
                </div>
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
                </label>

                <button className="add-to-cart-from-show">Add to Cart</button>   
            </div>
        </div>
        <hr className="show-divider"/>
        <div className="product-show-details">
                <h2>About This Item</h2>
                <p>{product.details}</p>
        </div>
        </>
    )
}


export default ProductShow