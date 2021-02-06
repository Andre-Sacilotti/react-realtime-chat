import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import ToastReducer from "./store/reducers/ToastReducer";
import AuthReducer from "./store/reducers/AuthReducer";
require('dotenv').config()


const Store = createStore(combineReducers(
    {
        toastReducer: ToastReducer,
        authReducer: AuthReducer,
    }
))


ReactDOM.render(
    <Provider store={Store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();

export default Store;
