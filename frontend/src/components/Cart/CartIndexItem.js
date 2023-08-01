import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, removeProduct, updateCartItem } from "../../store/cart";
import { useState } from "react";

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
        <ul>
            <img src={`{product.imageUrl}`}/>
            <li>{product?.name}</li>
            <li>{product?.price}</li>
            <li>Quantity: {quantity}</li>
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
            <button onClick={() => handleRemove(item.item.id)}>Remove</button>
        </ul>
    )

}