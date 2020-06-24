import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardingPres from "./components/onboarding/OnboardingPres";
import OnboardingDash from "./components/onboarding/OnboardingDash";
import OnboardingRecompense from "./components/onboarding/OnboardingRecompence";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={OnboardingPres} />

        <Route path="/etapeDeux" component={OnboardingDash} />

        <Route path="/etapeTrois" component={OnboardingRecompense} />
      </Switch>
    </Router>
  );
}
