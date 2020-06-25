import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sex from "./components/profile-creation/Sex";
import Weight from "./components/profile-creation/Weight";
import Birthday from "./components/profile-creation/Birthday";
import Pathologie from "./components/profile-creation/Pathologie";
import OnboardingPres from "./components/onboarding/OnboardingPres";
import OnboardingDash from "./components/onboarding/OnboardingDash";
import OnboardingRecompense from "./components/onboarding/OnboardingRecompence";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import HealthBook from "./components/Dashboard/HealthBook/HealthBook";
import Rewards from "./components/Dashboard/Rewards";
import HealthBookWeight from "./components/Dashboard/HealthBook/HealthBookWeight";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/pathologie" component={Pathologie} />
        <Route path="/age" component={Birthday} />
        <Route path="/weight" component={Weight} />
        <Route path="/sex" component={Sex} />
        <Route exact path="/" component={OnboardingPres} />
        <Route path="/etapeDeux" component={OnboardingDash} />
        <Route path="/etapeTrois" component={OnboardingRecompense} />
        <Route path="/connexion" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/healthBook" component={HealthBook} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/HealthBookWeight" component={HealthBookWeight} />
      </Switch>
    </Router>
  );
}
