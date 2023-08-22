import { useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchResults } from "../../store/search";
import { Link } from "react-router-dom";
import { addCartItem, updateCartItem } from "../../store/cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function SearchPage () {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const dispatch = useDispatch();
    const searchResults = useSelector(state => Object.values(state.search));
    let [quantity, setQuantity] = useState(1);
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query))
        }
    }, []);


    const handleAdd = (resultId) => {
        if (!currentUser) {
            history.push('/login')
        }

        let userId = currentUser?.id;
        let product = cart[resultId];
    
        if (product) {
            setQuantity(quantity += 1);
            dispatch(updateCartItem(product?.id, quantity));
        } else {
            let productId = resultId;
            let cartItem = { quantity, userId, productId};
            dispatch(addCartItem(cartItem));
         }
    }

    const SearchList = searchResults.map(result => {
    
        return (
                <li key={result?.id}>
                    <img src={result?.imageUrl} />
                    <Link id="link-to-show-from-product" to={`/products/${result?.id}`}><p>{result?.name}</p></Link>
                    <p>{result?.rating}</p>
                    <p id="index-price">${result?.price}</p>
                    <button className="add-to-cart-from-splash" onClick={() => handleAdd(result?.id)}>Add to Cart</button>
                </li>
        );
    });

    return (
        <div className="search-page">
            <h1>Search Results for "{query}"</h1>
            <ul className="products-index">
                {SearchList}
            </ul>
        </div>
    );
}
