import { useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchResults } from "../../store/search";
import { Link } from "react-router-dom";


// export default function SearchPage () {
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const query = searchParams.get("query");
//     const dispatch = useDispatch();
//     const searchResults = useSelector(state => Object.values(state.search));

//     useEffect(() => {
//         if (query) {
//             dispatch(fetchSearchResults())
//         }
//     }, []);


//     function handleAdd (resultId) {
//         // if (!currentUser) {
//         //     history.push('/login')
//         // } else {
//         //     let userId = currentUser.id;
//         //     // let product = cart[productId];

//         //     // if (product) {
//         //     //     setQuantity(quantity += 1);
//         //     //     dispatch(updateCartItem(product.id, quantity));
//         //     // } else {
//         //         let cartItem = { quantity, userId, productId};
//         //         dispatch(addCartItem(cartItem));
//         //      }
//             }

//     const SearchList = searchResults.map(result => {
    
//         return (
//             <li key={result.id}>
//                 <img src={result.imageUrl} />
//                 <Link id="link-to-show-from-product" to={`/products/${result.id}`}><p>{result.name}</p></Link>
//                 <p>{result.rating}</p>
//                 <p id="index-price">${result.price}</p>
//                 <button className="add-to-cart-from-splash" onClick={() => handleAdd(result.id)}>Add to Cart</button>
//             </li>
//         );
//     });

//     return (
//         <div>
//             <ul className="products-index">
//                 {SearchList}
//             </ul>
//         </div>
//     );
// }