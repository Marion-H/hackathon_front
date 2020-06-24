import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connexion from "./components/Register";
import Sex from "./components/profile-creation/Sex";
import Weight from "./components/profile-creation/Weight";
import Birthday from "./components/profile-creation/Birthday";
import Pathologie from "./components/profile-creation/Pathologie";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/pathologie" component={Pathologie} />
        <Route path="/age" component={Birthday} />
        <Route path="/weight" component={Weight} />
        <Route path="/sex" component={Sex} />
        <Route exact path="/" component={Connexion} />
      </Switch>
    </Router>
  );
}
