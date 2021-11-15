
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Busket from "../screens/Busket";
import Main from "../screens/Main";
import Menu from "../screens/Menu"
import Orders from "../screens/Orders";
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Дефолт */}


                <PrivateRoute exact path="/" component={Main} />
                <PrivateRoute exact path="/menu" component={Menu} />
                <PrivateRoute exact path="/busket" component={Busket} />
                <PrivateRoute exact path="/orders" component={Orders} />
                {/*<Route exact path="/" render={() => <Redirect to="/numbers" />} /> <PrivateRoute exact path="/notfound" component={NotFoundPage} /> */}
                {/***************  Раздел Номера ****************/}








            </Switch>
        </BrowserRouter>
    );
};

export default Router;
