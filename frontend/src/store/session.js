import { csrfFetch } from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';


const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
});


const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})