import { useSelector } from "react-redux";


export default function CartItem (item) {
    const products = useSelector(state => state.products);
    const product = products[item.item.productId];
   
    return (
        <li>
            {/* <li>{product?.imageUrl}</li> */}
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>{product?.quantity}</p>
        </li>
    )

}