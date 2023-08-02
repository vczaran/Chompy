import { csrfFetch } from "./csrf";

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";

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

export const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
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

export const submitReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })

    const data = await res.json();
    dispatch(addReview(data.review));
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
        case ADD_REVIEW:
            return {...newState, ...action.review};
        default:
            return state;
    }
}

export default productsReducer;