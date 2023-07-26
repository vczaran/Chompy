import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function ProductShow () {
    const productId = useParams().productId;
    const dispatch = useDispatch();

    useEffect((productId) => {
        dispatch(fetchProduct(productId))
    }, [productId])
    return (
        <p></p>
    )
}


export default ProductShow