import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handlerLogin, handlerLogout} from "../store/actions/AuthAction";

const PublicPage = (props) => {

    return (
            props.loggedIn ? (<Redirect to="/home"/>) : (props.children)

    )
}



const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(handlerLogin()),
        logout: () => dispatch(handlerLogout()),
    }
}

export default connect(null, mapDispatchToProps)(PublicPage)