import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardingPres from "./components/onboarding/OnboardingPres";
import OnboardingDash from "./components/onboarding/OnboardingDash";
import OnboardingRecompense from "./components/onboarding/OnboardingRecompence";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard/Dashboard";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={OnboardingPres} />
        <Route path="/etapeDeux" component={OnboardingDash} />
        <Route path="/etapeTrois" component={OnboardingRecompense} />
        <Route path="/connexion" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
