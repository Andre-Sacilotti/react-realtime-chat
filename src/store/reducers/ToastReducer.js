import {SHOW, CLOSE} from "../ActionTypes/ToastActionTypes"


const INITIAL_STATE = {show: false, type:null, message:null, hide: false, stay: true}

const ToastReducer = (state = INITIAL_STATE, action) => {
    console.log("Toast Reducer", action)
    switch (action.type){
        case SHOW:
            return  {
                hide: false,
                show: true,
                type:action.payload.type,
                message:action.payload.message,
                stay: action.payload.stay
            }

        case CLOSE:
            return {...state, show: false, hide: true}

        default:
            return state
    }
}

export default ToastReducer