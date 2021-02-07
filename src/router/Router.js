import {Switch, Route} from 'react-router-dom'


import Login from '../pages/Login/Login'
import Register from "../pages/Register/Register"
import {connect} from "react-redux";
import { useLocation } from 'react-router-dom'

import Home from "../pages/Home/Home";
import {handlerLogin, handlerLogout} from "../store/actions/AuthAction";
import PublicPage from "../pages/PublicPages";
import PrivatePage from "../pages/PrivatePage";




const Router = (props) => {

    const location = useLocation();
    console.log("Router: ", location.pathname);
    return (
        <Switch>

            <Route exact path={"/teste"} component={
                () => <PrivatePage loggedIn={props.reducer.authReducer.loggedIn}><h2>Rota de Teste</h2></PrivatePage>} />

            <Route exact path={"/home"} component={
                () => <PrivatePage loggedIn={props.reducer.authReducer.loggedIn}><Home/></PrivatePage>} />

            <Route exact path={"/"} component={
                () => <PublicPage actual_path={location.pathname} loggedIn={props.reducer.authReducer.loggedIn}><Login/></PublicPage>} />

            <Route exact path={"/register"} component={
                () => <PublicPage actual_path={location.pathname}  loggedIn={props.reducer.authReducer.loggedIn}><Register/></PublicPage>} />











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