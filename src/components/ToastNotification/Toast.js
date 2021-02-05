
import {handlerCloseToast, handlerShowToast} from "../../store/actions/ToastAction";

import ToastStore from "../../index"

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

        ToastStore.dispatch(handlerShowToast(type, message, stay))
    }

    static close(){
        if(ToastStore.getState().show){
            ToastStore.dispatch(handlerCloseToast())
        }


    }
}


export default Toast
