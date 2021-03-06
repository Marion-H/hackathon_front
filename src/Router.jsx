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
import Posologie from "./components/Dashboard/Posologie";
import HealthBook from "./components/Dashboard/HealthBook/HealthBook";
import Rewards from "./components/Dashboard/Rewards";
import DocSelect from "./components/profile-creation/DocSelect";
import HealthBookWeight from "./components/Dashboard/HealthBook/HealthBookWeight";
import HealthBookAppetite from "./components/Dashboard/HealthBook/HealthBookAppetite";
import HealthBookMood from "./components/Dashboard/HealthBook/HealthBookMood";
import DoctorDash from "./components/Doctor/DoctorDash";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/healthBook" component={HealthBook} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/doc-select" component={DocSelect} />
        <Route path="/pathologie" component={Pathologie} />
        <Route path="/date" component={Birthday} />
        <Route path="/weight" component={Weight} />
        <Route path="/sex" component={Sex} />
        <Route path="/connexion" component={Register} />
        <Route path="/etapeTrois" component={OnboardingRecompense} />
        <Route path="/etapeDeux" component={OnboardingDash} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/posologie" component={Posologie} />
        <Route path="/healthBook" component={HealthBook} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/HealthBookWeight" component={HealthBookWeight} />
        <Route path="/healthBookAppetite" component={HealthBookAppetite} />
        <Route path="/HealthBookMood" component={HealthBookMood} />
        <Route path="/doctorDash" component={DoctorDash} />
        <Route exact path="/" component={OnboardingPres} />
      </Switch>
    </Router>
  );
}
