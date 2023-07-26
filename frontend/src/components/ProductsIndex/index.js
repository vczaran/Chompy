import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";

function ProductsIndex() {
    const products = useSelector(state => Object.values(state.products));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log(products)
    // const ProductList = products.forEach(product => {
    //     return (
    //         <li key={product.id}>
    //             <p>{product.name}</p>
    //             <p>{product.rating}</p>
    //             <p>{product.price}</p>
    //             <p>{product.flavorOptions}</p>
    //             <p>{product.sizeOptions}</p>   
    //             <p>{product.details}</p>   
    //         </li>
    //     )
    // });

    return (
        <div className="products-index">
            <ul>
                {/* {ProductList} */}
                {products}
            </ul>
        </div>
    )

}


export default ProductsIndex;