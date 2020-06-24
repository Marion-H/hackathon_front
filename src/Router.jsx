import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Connexion from "./components/Register";
import Modale from "./ModaleCDS";

export default function MyRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Modale />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/" component={Connexion} />
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
