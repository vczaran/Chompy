

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";

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

export const fetchProducts = () => async dispatch => {
    const res = await fetch("/api/products");
    const products = await res.json();
    dispatch(receiveProducts(products));
}

export const fetchProduct = (product) => async dispatch => {
    const res = await fetch(`api/products/${product.id}`);
    const product = await res.json();
    dispatch(receiveProduct(product));
}


function productsReducer (state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...newState, ...action.products};
        case RECEIVE_PRODUCT:
            return {...newState, [action.product.id]: action.product}
        default:
            return state;
    }
}

export default productsReducer;