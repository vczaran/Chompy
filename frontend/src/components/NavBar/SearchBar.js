import { useState } from "react"
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function SearchBar () {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(0);
    const searchResults = useSelector(state => Object.values(state.search));
    const history = useHistory();

    function handleSearch(e) {
        const query = e.target.value;
        setSearchText(query);
        clearTimeout(timer);
        
        if (query.trim() !== "") {
            setTimer(setTimeout(() => dispatch(fetchSearchResults(query)), 300));
        } else {
            dispatch(clearSearchResults());
        };

    }

    function handleClick(id) {
        return (e) => {
            e.preventDefault();
            history.push(`/products/${id}`);
            dispatch(clearSearchResults());
            setSearchText("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (searchText.trim() !== "") {
            history.push(`/search?query=${searchText}`);
        }
    }

    return (
        <div className="searchbar-container">
            <input type="text" id="search-input" value={searchText} placeholder="Search" onChange={handleSearch}/>
            <button id="search-button" onClick={handleSubmit}><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "#244cbb"}}></i></button>
            {searchText && searchResults && <ul id="search-dropdown">
                {searchResults.map(result => {
                   return <li className="search-dropdown-item" onClick={handleClick(result.id)}> {result.name} </li>
                })}
            </ul>}
        </div>
    )

}