import React, {useEffect} from 'react';
import AuthCheck from "../services/Auth";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {handlerLogin, handlerLogout} from "../store/actions/AuthAction";

const PublicPage = (props) => {

    const history = useHistory()

    useEffect(
        () => {
            console.log("Checking 1", AuthCheck())
            AuthCheck().then(
                (response) => {
                    if (response === true){
                        history.push("/home")
                        props.login()
                    }
                }
            )
        },
        [])

    return (
            props.children
    )

}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(handlerLogin()),
        logout: () => dispatch(handlerLogout()),
    }
}

export default connect(null, mapDispatchToProps)(PublicPage)