import React from 'react'
import Cookies from "universal-cookie";
import API from "./Axios";
import Store from "../index"

import {handlerLogin} from "../store/actions/AuthAction"



async function AuthCheck(){

    const cookies = new Cookies();

    let returndata = null;

    await API.post("token", {'auth_token': cookies.get("auth_token")}).then(
        (response) => {
            console.log("Response: ", response)
            if (response.data['valid_auth'] === true) {
                console.log(Store)
                Store.dispatch(handlerLogin())
                returndata = true
            }else{
                returndata = false
            }
        }
    ).catch(error => {
        console.log("Error: ", error)
        returndata = false
    })

    return returndata


}

export default AuthCheck
