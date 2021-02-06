const INITIAL_STATE = {
        loggedIn: false
    }

const AuthReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case "LOGIN":
            return {
                loggedIn: true,
            }
        case "LOGOUT":
            return {
                loggedIn: false,
            }
        default:
            return state
    }

}

export default AuthReducer