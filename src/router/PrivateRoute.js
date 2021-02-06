import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, loggedIn, ...rest}) => {

    console.log("PrivateRoute: ", loggedIn)

    return (

        <Route {...rest} render={props => (
            loggedIn ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;