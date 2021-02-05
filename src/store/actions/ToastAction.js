import {SHOW, CLOSE} from "../ActionTypes/ToastActionTypes"

export const handlerShowToast = (type, message, stay) => {
    return {
        type: SHOW,
        payload: {type:type, message:message, stay:stay}
    }
}

export const handlerCloseToast = () => {
    return {
        type: CLOSE,
        payload: {}
    }
}