import React, {useEffect} from 'react';
import AuthCheck from "../services/Auth";
import {Redirect, useHistory} from "react-router-dom";
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