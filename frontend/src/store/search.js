import { csrfFetch } from "./csrf"

export const GET_SEARCH_RESULTS = 'search/searchResults';
export const CLEAR_SEARCH_RESULTS = 'search/clearSearchResults';

export const receiveSearchResults = (searchResults) => ({
    type: GET_SEARCH_RESULTS,
    searchResults
})

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})
 
export const fetchSearchResults = (query) => async dispatch => {
    const res = await csrfFetch(`/api/products/search?query=${query}`);
    const data = await res.json();
    dispatch(receiveSearchResults(data));
}

export default function searchReducer (state = {}, action) {
    const newState = {...state};

    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {...action.searchResults.products};
        case CLEAR_SEARCH_RESULTS:
            return {};
        default:
            return state;
    }

}