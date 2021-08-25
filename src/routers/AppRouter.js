import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import { UserContext } from "../UserContext";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  const { user } = useContext(UserContext);
  const uid = user.email;

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/admin"
            component={Dashboard}
            isAuthenticated={!!uid}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
