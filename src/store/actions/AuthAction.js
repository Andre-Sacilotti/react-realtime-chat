import {LOGIN, LOGOUT} from "../ActionTypes/AuthTypes";


export const handlerLogin = () => {
    return {
        type:LOGIN,
    }
}

export const handlerLogout = () => {
    return {
        type:LOGOUT,
    }
}