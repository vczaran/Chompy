import { csrfFetch } from "./csrf";
import { SET_CURRENT_USER } from "./sessionReducer";

const RECEIVE_CART = 'cart/RECEIVE_CART';
const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
// // const UPDATE_PRODUCT = 'cart/UPDATE_PRODUCT';
const RESET_CART = 'cart/RESET_CART';

const addProduct = (cartItem) => {
    return {
        type: ADD_PRODUCT,
        cartItem
    };
};

const receiveCart = (cart) => {
    return {
    type: RECEIVE_CART,
    cart
    };
}

export const removeProduct = (cartItemId) => {
    return {
        type: REMOVE_PRODUCT,
        cartItemId
    };
};

// // const updateProduct = (productId, quantity) => {
// //     if (quantity < 1) return removeProduct(productId);

// //     return {
// //         type: UPDATE_PRODUCT,
// //         productId,
// //         quantity
// //     };
// // };

export const resetCart = () => {
    return {
        type: RESET_CART,
        cart: null
    };
};

export const fetchCartItems = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`)
    const data = await res.json();

    dispatch(receiveCart(data.cart));
}


export const addCartItem = (cartItem) => async dispatch => {
    const res = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })
    const data = await res.json();
    dispatch(addProduct(data.cart));
}

export const deleteCartItem = (cartItemId) => async dispatch => {
    await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    })
    // dispatch(removeProduct(cartItemId));
}


function cartReducer ( state = {}, action ) {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_CART:
            sessionStorage.setItem("cart", JSON.stringify(action.cart));
            return {...newState, ...action.cart};
        case ADD_PRODUCT:
            sessionStorage.setItem("cart", JSON.stringify(action.cartItem));
            newState[action.cartItem.id] = action.cartItem;
            return newState;
        case RESET_CART:
            return action.cart;
        case SET_CURRENT_USER:
            return { ...newState, ...action.cart};
        case REMOVE_PRODUCT:
            delete newState[action.cartItemId];
            return newState;
        // case UPDATE_PRODUCT:
        //     return {...newState, {action.id, action.userId, action.productId, action.quantity}}
        default:
            return state;
    }
}

export default cartReducer;