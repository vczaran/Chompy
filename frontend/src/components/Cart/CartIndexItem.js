import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, removeProduct } from "../../store/cart";


export default function CartIndexItem (item) {
    const products = useSelector(state => state.products);
    const product = products[item.item.productId];
    const dispatch = useDispatch();

    function handleRemove () {
        dispatch(deleteCartItem(item.item.id));
        dispatch(removeProduct(item.item.id));
    }

    return (
        <ul>
            <li>{product?.imageUrl}</li>
            <li>{product?.name}</li>
            <li>{product?.price}</li>
            <li>{product?.quantity}</li>
            <button onClick={() => handleRemove(item.item.id)}>Remove</button>
        </ul>
    )

}