import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

const initializeApp = () => {
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

if (sessionStorage.getItem("currentUser") === null || sessionStorage.getItem("X-CSRF-Token") === null) {
  store.dispatch(sessionActions.restoreSession()).then(initializeApp);
} else {
  initializeApp();
};