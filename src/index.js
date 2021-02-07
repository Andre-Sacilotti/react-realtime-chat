import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import ToastReducer from "./store/reducers/ToastReducer";
import AuthReducer from "./store/reducers/AuthReducer";
import API from "./services/Axios";
import Cookies from "universal-cookie";
import {handlerLogin} from "./store/actions/AuthAction";

require('dotenv').config()


const Store = createStore(combineReducers(
    {
        toastReducer: ToastReducer,
        authReducer: AuthReducer,
    }
))
const cookies = new Cookies();

const data = {auth_token: cookies.get("auth_token")}

API.post("token", data).then(
    (response) => {
        if (response.data['valid_auth'] === true){
            Store.dispatch(handlerLogin())
        }
    }
).catch(error => {

})


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
