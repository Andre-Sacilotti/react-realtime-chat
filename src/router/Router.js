import {Switch, Route} from 'react-router-dom'


import Login from '../pages/Login/Login'
import Register from "../pages/Register/Register"
import {connect} from "react-redux";
import { useLocation } from 'react-router-dom'

import Home from "../pages/Home/Home";
import {handlerLogin, handlerLogout} from "../store/actions/AuthAction";
import PrivateRoute from "../pages/PrivatePage";



const Router = (props) => {
    return (
        <Switch>





            <Route exact path={"/"} component={
                (props) => {
                    return <Login {...props}/>
                }} />

            <Route exact path={"/register"} component={
                () => <Register/>} />


            <PrivateRoute
                exact
                path={"/teste"}
                loggedIn={props.reducer.authReducer.loggedIn}
                component={ () => <h2>Rota de Teste</h2>}
            />


            <PrivateRoute
                exact
                path={"/home"}
                loggedIn={props.reducer.authReducer.loggedIn}
                component={ () => <Home/>}
            />


        </Switch>
    )
};

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