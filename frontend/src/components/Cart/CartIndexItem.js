import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, removeProduct, updateCartItem } from "../../store/cart";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CartIndexItem (item) {
    const products = useSelector(state => state.products);
    const product = products[item.item.productId];
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.item.quantity);

    function handleRemove () {
        dispatch(deleteCartItem(item.item.id));
        dispatch(removeProduct(item.item.id));
    }

    function handleChange (e) {
        setQuantity(e.target.value);
        dispatch(updateCartItem(item.item.id, e.target.value));
    }

    return (
        <ul id="cart-index-item">
            <img src={`${product.imageUrl}`}/>
            <div id="cart-info">
                <Link id="link-to-show-from-product" to={`/products/${product.id}`}><li>{product?.name}</li></Link>
                <li id="cart-index-price">${product?.price}</li>
                {item?.item.flavor && (<li>Flavor: {item?.item.flavor}</li>)}
                {item?.item.size && (<li>Size: {item?.item.size}</li>)}
                {item?.item.color && (<li>Color: {item?.item.color}</li>)}
            </div>
            <div id="cart-index-buttons">
                <label>Quantity:  
                    <select className="quantity-dropdown-cartindex" onChange={handleChange} defaultValue={quantity}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                    </select>
                </label>
                <button onClick={() => handleRemove(item.item.id)}>Remove</button>
            </div>
        </ul>
    )

}