import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
