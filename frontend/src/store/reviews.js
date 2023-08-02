import { RECEIVE_PRODUCT } from "./products";
import { csrfFetch } from "./csrf";

const ADD_REVIEW = "reviews/ADD_REVIEW";


export const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}


export const submitReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })

    const data = await res.json();
    dispatch(addReview(data.review));
}


export default function reviewsReducer (state = {}, action) {
    const newState = {...state}

    switch(action.type) {
        case ADD_REVIEW:
            return {...newState, ...action.review};
        case RECEIVE_PRODUCT:
            return {...newState, ...action.reviews};
        default:
            return state;
    }
}