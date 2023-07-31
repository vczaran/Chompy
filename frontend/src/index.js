import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { csrfFetch } from './store/csrf';
import { restoreSession } from './store/sessionReducer';
import { fetchCartItems } from './store/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.fetchCartItems = fetchCartItems;
}


function initializeApp() {

  root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
    );
  } 

  store.dispatch(restoreSession()).then(initializeApp());

// if (sessionStorage.getItem("currentUser") === null || sessionStorage.getItem("X-CSRF-Token") === null) {
//   store.dispatch(restoreSession()).then(initializeApp());
//   } else {
//     initializeApp();
//   };