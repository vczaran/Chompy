import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './sessionReducer';
import errorsReducer from './errors';
import productsReducer from './products';
import cartReducer from './cart';
import reviewsReducer from './reviews';
import searchReducer from './search';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  products: productsReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
  search: searchReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;