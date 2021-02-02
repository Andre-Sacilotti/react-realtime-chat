import {Switch, Route} from 'react-router-dom'

import Login from '../pages/Login/Login'

const Router = () => {

    return (
        <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} render={() => <h1>Teste 2</h1>} />
        </Switch>
    )
}

export default Router