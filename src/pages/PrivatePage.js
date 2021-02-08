import React, {useEffect} from 'react'
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    console.log(rest.loggedIn)

    return (<Route
        {...rest}
        render={props =>
            rest.loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: "/", state: {from: props.location}}}/>
            )
        }
    />)
};

export default PrivateRoute

