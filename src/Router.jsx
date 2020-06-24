import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connexion from "./components/Register";
import Sex from "./components/profile-creation/Sex";
import Weight from "./components/profile-creation/Weight";
import Birthday from "./components/profile-creation/Birthday";
import Pathologie from "./components/profile-creation/Pathologie";
import OnboardingPres from "./components/onboarding/OnboardingPres";
import OnboardingDash from "./components/onboarding/OnboardingDash";
import OnboardingRecompense from "./components/onboarding/OnboardingRecompence";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/pathologie" component={Pathologie} />
        <Route path="/age" component={Birthday} />
        <Route path="/weight" component={Weight} />
        <Route path="/sex" component={Sex} />
        <Route exact path="/" component={Connexion} />
        <Route exact path="/" component={OnboardingPres} />
        <Route path="/etapeDeux" component={OnboardingDash} />
        <Route path="/etapeTrois" component={OnboardingRecompense} />
        <Route path="/connexion" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
