import { useSelector } from "react-redux";


export default function CartItem (item) {
    const products = useSelector(state => state.products);
    const product = products[item.item.productId];
   
    return (
        <ul>
            <li>{product?.imageUrl}</li>
            <li>{product?.name}</li>
            <li>{product?.price}</li>
            <li>{product?.quantity}</li>
        </ul>
    )

}