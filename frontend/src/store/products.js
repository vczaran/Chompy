import { csrfFetch } from "./csrf";

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";
const RECEIVE_REVIEWS = "products/RECEIVE_REVIEWS";

export const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}


export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const fetchProducts = () => async (dispatch) => {
    const res = await csrfFetch('/api/products');
    const data = await res.json();
    dispatch(receiveProducts(data.products));
}

export const fetchProduct = (productId) => async (dispatch) => {
    const res = await csrfFetch(`/api/products/${productId}`);
    const data = await res.json();
    dispatch(receiveProduct(data.product));
}

export const fetchReviews = (productId) => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}`);
    const data = await res.json();
    dispatch(receiveReviews(data.product[productId].reviews));
}


function productsReducer (state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products};
        case RECEIVE_PRODUCT:
            return {...newState, ...action.product};
        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews};
        default:
            return state;
    }
}

export default productsReducer;