import {Switch, Route} from 'react-router-dom'
import {useEffect} from 'react'
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'
import API from "../services/Axios";
import { useHistory } from "react-router-dom";


import Login from '../pages/Login/Login'
import Register from "../pages/Register/Register"
import {connect} from "react-redux";

import {handlerLogin, handlerLogout} from '../store/actions/AuthAction'


const Router = (props) => {

    const cookies = new Cookies()

    const signJWT = require("jwt-encode")

    // useEffect(
    //     () => {
    //
    //         const data = {auth_token: cookies.get("auth_token")}
    //
    //         console.log("chave: ",  process.env.REACT_APP_SECRET_KEY)
    //
    //
    //         if (data !== ""){
    //
    //             const jwtToken = signJWT(data, process.env.REACT_APP_SECRET_KEY)
    //
    //             console.log("JWT: ", jwtToken)
    //
    //             API.post("token", {token: jwtToken}).then(
    //                 (response) => {
    //                     if (response.data.get('valid_auth') === true){
    //                         console.log("True")
    //                         props.addLogin()
    //                     }else{
    //                         console.log("False")
    //                     }
    //                 }
    //             ).catch(
    //                 (error) => {
    //                 }
    //             )
    //
    //         }
    //
    //     }, []
    // )

    return (
        <Switch>
            {props.reducer.authReducer.loggedIn ?
                <Route exact path={"/home"} component={() => <h1>Teste</h1>} />

                : <Route exact path={"/"} component={Login} />
                 }

            {props.reducer.authReducer.loggedIn ?
                <Redirect to={"/home"}/>

                : null
            }



            <Route exact path={"/register"} component={Register} />
        </Switch>
    )
}

const mapStateToProps = (state) => {

    return {
        reducer: state
    }

}



export default connect(mapStateToProps)(Router)