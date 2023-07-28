const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'cart/UPDATE_PRODUCT';
const RESET_CART = 'cart/RESET_CART';

export const addProduct = (productId) => {
    return {
        type: ADD_PRODUCT,
        productId
    };
};

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    };
};

export const updateProduct = (productId, quantity) => {
    if (quantity < 1) return removeProduct(productId);

    return {
        type: UPDATE_PRODUCT,
        productId,
        quantity
    };
};

export const resetCart = () => {
    return {
        type: RESET_CART
    };
};