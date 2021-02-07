import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {

    console.log("PrivateRoute: ", props.loggedIn)

    return (



        <Route {...props.rest} render={
            () => (
            props.loggedIn ?
                props.children
                : <Redirect to="/" />
        )} />
    );
}

export default PrivateRoute;