import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, removeProduct } from "../../store/cart";
import { useState, useEffect } from "react";

export default function CartIndexItem (item) {
    const products = useSelector(state => state.products);
    const product = products[item.item.productId];
    // const price = product.price;
    const dispatch = useDispatch();
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     setTotal(total + price);
    // }, [])

    function handleRemove () {
        dispatch(deleteCartItem(item.item.id));
        dispatch(removeProduct(item.item.id));
        // setTotal(total - price);
    }

    return (
        <ul>
            {/* {total} */}
            <li>{product?.imageUrl}</li>
            <li>{product?.name}</li>
            <li>{product?.price}</li>
            <li>{product?.quantity}</li>
            <select className="quantity-dropdown-cartindex">
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
            <button onClick={() => handleRemove(item.item.id)}>Remove</button>
        </ul>
    )

}