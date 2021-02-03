import {Switch, Route} from 'react-router-dom'

import Login from '../pages/Login/Login'
import Register from "../pages/Register/Register"

const Router = () => {

    return (
        <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} render={() => <h1>Teste 2</h1>} />
            <Route exact path={"/register"} component={Register} />
        </Switch>
    )
}

export default Router