import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useEffect} from "react"


import Login from '../pages/Login/Login'
import Register from "../pages/Register/Register"
import {connect} from "react-redux";

import PrivateRoute from "./PrivateRoute"
import Home from "../pages/Home/Home";
import Cookies from "universal-cookie";
import API from "../services/Axios";
import {handlerLogin, handlerLogout} from "../store/actions/AuthAction";
import PublicPage from "../pages/PublicPages";



const Router = (props) => {

    console.log("Loggedin Router.js: ", props.reducer.authReducer.loggedIn)


    return (
        <Switch>
            <PublicPage>
                <Route exact path={"/"} component={Login} />
            </PublicPage>

            <PublicPage>
                <Route exact path={"/register"} component={Register} />
            </PublicPage>



            <PrivateRoute component={Home} loggedIn={props.reducer.authReducer.loggedIn} path="/home" exact />
            <PrivateRoute component={() => <h2>Teste</h2>} loggedIn={props.reducer.authReducer.loggedIn} path="/teste" exact />



        </Switch>
    )
}

const mapStateToProps = (state) => {

    return {
        reducer: state
    }

}

const mapDispatchToPros = dispatch => {
    return {
        addLogin: () => dispatch(handlerLogin()),
        removeLogin: () => dispatch(handlerLogout())
    }
}



export default connect(mapStateToProps, mapDispatchToPros)(Router)