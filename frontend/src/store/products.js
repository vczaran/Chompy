import { csrfFetch } from "./csrf";

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";


export const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}


export const receiveProduct = (product, reviews) => {
    return {
        type: RECEIVE_PRODUCT,
        product,
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
    dispatch(receiveProduct(data.product, data.reviews));
}


function productsReducer (state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products};
        case RECEIVE_PRODUCT:
            return {...newState, ...action.product};
        default:
            return state;
    }
}

export default productsReducer;