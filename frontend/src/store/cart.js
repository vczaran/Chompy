import { csrfFetch } from "./csrf";

const RECEIVE_CART = 'cart/RECEIVE_CART';
const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
// const UPDATE_PRODUCT = 'cart/UPDATE_PRODUCT';
// const RESET_CART = 'cart/RESET_CART';

const receiveCart = (cartItems) => {
    return {
        type: RECEIVE_CART,
        cart: [cartItems]
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    };
};

const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    };
};

// const updateProduct = (productId, quantity) => {
//     if (quantity < 1) return removeProduct(productId);

//     return {
//         type: UPDATE_PRODUCT,
//         productId,
//         quantity
//     };
// };

// export const resetCart = () => {
//     return {
//         type: RESET_CART,
//         cart: []
//     };
// };

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch('/api/cart_items')
    const cartItems = await res.json();

    dispatch(receiveCart(cartItems));
}

// export const storeCart = (cartItems) => async dispatch => {
//     dispatch(setCart(cartItems));
// };

export const addCartItem = (cartItem) => async dispatch => {
    // debugger
    const res = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })
    const data = await res.json();
    // debugger
    dispatch(addProduct(data.cart_item));
}

export const deleteCartItem = (cartItemId) => async dispatch => {
    await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    })
    dispatch(removeProduct(cartItemId));
}

const initialState = JSON.parse(sessionStorage.getItem("cart")) || [];


function cartReducer ( state = initialState, action ) {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_CART:
            return action.cart;
        case ADD_PRODUCT:
            newState[action.product.id] = action.product;
            return newState;
        case REMOVE_PRODUCT:
            delete newState[action.productId];
            return newState;
        // case UPDATE_PRODUCT:
        //     return {...newState, {action.id, action.userId, action.productId, action.quantity}}
        default:
            return state;
    }
}

export default cartReducer;