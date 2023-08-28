import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import './ProductShow.css';
import { addCartItem } from "../../store/cart";
import { Link } from "react-router-dom";
import { deleteReview } from "../../store/reviews";
import moment from "moment-timezone";


function ProductShow () {
    const dispatch = useDispatch();
    const productId = useParams().productId;
    const product = useSelector(state => state.products?.[productId]);
    const reviews = useSelector(state => state.reviews);

    const [quantity, setQuantity] = useState(1);
    let [color, setColor] = useState("");
    let [size, setSize] = useState("");
    const [flavor, setFlavor] = useState("");
    let [price, setPrice] = useState(product?.price);
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [])

    if (!product) {
        return null
    }

    function handleAdd () {
        if (!currentUser) {
            history.push('/login')
        } else {
            let userId = currentUser.id;
            let cartItem = { quantity, userId, productId, color, size, flavor, price};
            dispatch(addCartItem(cartItem));
        }
    }

    function handleDelete (reviewId) {
        dispatch(deleteReview(reviewId));
    }

    
    const FlavorOptions = product.flavorOptions.map(flavor2 => {
        return (
            <button name="flavor" className={flavor == flavor2 ? "selected" : ""} value={flavor2} 
            onClick={(e) => { setFlavor(flavor2) }}>{flavor2}</button>
        )
    })

    const SizeOptions = product.sizeOptions.map(size2 => {

        return (
            <button name="size" className={size == size2 ? "selected" : ""} value={size2} 
            onClick={(e) => { 
                setSize(size2);
                handlePrice(size2); 
            }}>{size2}</button>
        )
    })

    function handlePrice (size2) {
        if (product.sizeOptions.indexOf(size2) === 1) {
                        setPrice(product.price + 10.56)
                     } else if (product.sizeOptions.indexOf(size2) === 0) {
                         setPrice(product.price)
                     } else {
                         setPrice(product.price + 15.87)
                     };
    }

      const ColorOptions = product.colorOptions.map(color2 => {
        return (
            <button name="color" className={color == color2 ? "selected" : ""} value={color2} 
            onClick={(e) => { setColor(color2) }}>{color2}</button>
        )
    })

    const ReviewList = Object.values(reviews).map(review => {
        if (review?.productId == productId && review?.authorId == currentUser?.id) {
             return (
                    <li id="review" key={review.id}>
                        <p>By {review.name} on {moment(review.createdAt).format("MMM Do YYYY")}</p>
                        <h3>{review.title}</h3>
                        <p id="review-body">{review.body}</p>
                        <div className="review-buttons">
                            <button onClick={(() => {handleDelete(review.id)})}>Delete Review</button>
                            <Link to={`/reviews/edit/${review.id}`}>Edit Review</Link>
                        </div>
                    </li>
            );
        } else if (review?.productId == productId) {
              return (
                    <li id="review" key={review.id}>
                        <p>By {review.name} on {moment(review.createdAt).format("MMM Do YYYY")}</p>
                        <h3>{review.title}</h3>
                        <p id="review-body">{review.body}</p>
                    </li> 
            );
        }
    });

    return (
        <>
        <header id="category">{product.category}</header>
        <div className="product-show-page">
            <img id="product-show-img" src={product.imageUrl} />
            <div className="product-show-info">
                <h1>{product.name}</h1>
                <p>{product.rating}</p>
                <p id="price">${parseFloat(price).toFixed(2)}</p>
                
                {(product.flavorOptions.length > 0) && 
                    <div className="flavors">
                        <p>Flavor</p>
                        {FlavorOptions}
                    </div>}

                {(product.sizeOptions.length > 0) && 
                    <div className="sizes">
                        <p>Size</p>
                        {SizeOptions}
                    </div>}

                 {(product.colorOptions.length > 0) && 
                    <div className="colors">
                        <p>Color</p>
                        {ColorOptions}
                    </div>}
            </div>
            <div className="dropdown-buttons-container-show">
                <div className="inner-dropdown-container">
                    <fieldset>
                        <legend>Quantity</legend>
                        <select className="quantity-dropdown" onChange={(e) => {setQuantity(e.target.value)}} defaultValue={quantity}>
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
        <div className="reviews">
            <h1>Reviews</h1>
            <Link id="review-link" to={`/review/${productId}`}>Write a Review</Link>
            <ul className="review-list">
                {product.reviews && ReviewList}
            </ul>
        </div>
        </>
    )
}


export default ProductShow