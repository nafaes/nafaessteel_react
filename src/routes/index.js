import React from "react";
import { Route, Switch } from "react-router";
import { LANDING, SIGNIN } from "../constants/routes";
import LandingPage from "../pages/Landing";
import SigninPage from "../pages/Signin";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={LANDING} component={LandingPage} />
      <Route exact={true} path={SIGNIN} component={SigninPage} />
    </Switch>
  );
};``

export default Routes;
