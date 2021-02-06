
import {handlerCloseToast, handlerShowToast} from "../../store/actions/ToastAction";

import Store from "../../index"

class Toast {

    static show(type, message, stay){
        if (stay===false){
            setTimeout(
                () => {
                    this.close()
                },
                2000
            )
        }

        Store.dispatch(handlerShowToast(type, message, stay))
    }

    static close(){
        if(Store.getState().toastReducer.show){
            Store.dispatch(handlerCloseToast())
        }


    }
}


export default Toast
