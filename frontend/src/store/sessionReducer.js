import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchCartItems, resetCart } from "./cart";
import { csrfFetch } from "./csrf";
import { storeErrors, removeErrors } from "./errors";

export const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

const setCurrentUser = (user, cart) => ({
    type: SET_CURRENT_USER,
    user,
    cart
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

const storeCSRFToken = res => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

const storeCurrentUser = (user, cart) => {
    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("currentUser");
    };
  }

export const loginUser = ({ lowerEmail, password }) => async dispatch => {
    const res = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({lowerEmail, password})
    });
    const data = await res.json();
    if (res.ok) {
      storeCurrentUser(data?.user, data?.cart);
      dispatch(setCurrentUser(data?.user, data?.cart));
      dispatch(fetchCartItems(data.user?.id));
      dispatch(removeErrors());
      return res;
    } else {
      dispatch(storeErrors(data.errors));
    }
  };


  export const logoutUser = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
      method: "DELETE"
    });
    storeCurrentUser(null, null);
    dispatch(removeCurrentUser());
    dispatch(resetCart());
    return res;
  };


  export const restoreSession = () => async dispatch => {
    const res = await csrfFetch("/api/session");
    storeCSRFToken(res);
    const data = await res.json();
    if (res.ok) {
      storeCurrentUser(data?.user, data?.cart);
      dispatch(setCurrentUser(data?.user, data?.cart));
      dispatch(fetchCartItems(data.user?.id));
      return res;
    } else {
      dispatch(storeErrors(data?.errors));
    }
  };

  export const signupUser = (user) => async (dispatch) => {
    const { name, email, password } = user;
    const res = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({name, email, password})
    });
    const data = await res.json();
    if (res.ok) {
      storeCurrentUser(data.user, data.cart);
      dispatch(setCurrentUser(data.user, data.cart));
      dispatch(fetchCartItems(data.user.id));
      dispatch(removeErrors());
      return res;
    } else {
      dispatch(storeErrors(data.errors));
    }
  };

  const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };

  
  const sessionReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...newState, user: action.user};
      case REMOVE_CURRENT_USER:
        return { ...newState, user: null, cart: null };
      default:
        return state;
    }
  };
  
  export default sessionReducer;