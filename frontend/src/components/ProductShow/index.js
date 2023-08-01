import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import './ProductShow.css';
import { addCartItem } from "../../store/cart";


function ProductShow () {
    const dispatch = useDispatch();
    const productId = useParams().productId;
    const product = useSelector(state => state.products?.[productId]);

    const [quantity, setQuantity] = useState(1);
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    if (!product) {
        return null
    }

    function handleAdd () {
        if (!currentUser) {
            history.push('/login')
        } else {
            let userId = currentUser.id;
            
            const cartItem = { quantity, userId, productId};
            dispatch(addCartItem(cartItem));
        }
    }


    let selected = {flavor: null, size: null};
    
    const FlavorOptions = product.flavorOptions.map(flavor => {
        return (
            <button name="flavor" onClick ={(e) => { 
                selected.flavor?.classList.remove('selected');
                e.target.classList.add('selected');
                selected.flavor = e.target;
            }}>{flavor}</button>
        )
    })

    const SizeOptions = product.sizeOptions.map(size => {
        return (
            <button name="size" onClick={(e)=>{
                selected.size?.classList.remove('selected');
                e.target.classList.add('selected');
                selected.size = e.target;
            }}
            >{size}</button>
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
                <div className="flavors">
                    <p>Flavor</p>
                    {FlavorOptions}
                </div>
                <div className="sizes">
                    <p>Size</p>
                    {SizeOptions}
                </div>
            </div>
            <div className="dropdown-buttons-container-show">
                <div className="inner-dropdown-container">
                    <fieldset>
                        <legend>Quantity</legend>
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
                    </fieldset>
                    <p> FREE 1-3 day delivery </p>
                </div>
                <button className="add-to-cart-from-show" onClick={handleAdd}>Add to Cart</button>
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