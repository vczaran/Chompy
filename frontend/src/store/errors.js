
const SET_ERRORS = 'errors/SET_ERRORS';

 
const setErrors = (errors) => ({
    type: SET_ERRORS,
    errors
});

export const storeErrors = (errors) => async dispatch => {
    dispatch(setErrors(errors));
};

const initialState = JSON.parse(sessionStorage.getItem("errors")) || {};

function errorsReducer (state = initialState, action ) {
    switch(action.type) {
        case SET_ERRORS:
            return action.errors;
        default:
            return state;
    };
}

export default errorsReducer;