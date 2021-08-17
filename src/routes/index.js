import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../pages/Landing";
import SigninPage from "../pages/Signin";
import ItemsPage from "../pages/ItemsPage";
import AddToCartPage from "../pages/AddToCartPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import SignupPage from "../pages/Signup";
import TrackOrderPage from "../pages/TrackOrder";

import {
  LANDING,
  SIGNIN,
  ITEMS,
  ADDTOCART,
  CART,
  CHECKOUT,
  SIGNUP,
  TRACKORDER,
} from "../constants/routes";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={LANDING} component={LandingPage} />
      <Route exact={true} path={SIGNIN} component={SigninPage} />
      <Route exact={true} path={ITEMS} component={ItemsPage} />
      <Route exact={true} path={ADDTOCART} component={AddToCartPage} />
      <Route exact={true} path={SIGNUP} component={SignupPage} />
      <Route exact={true} path={CART} component={CartPage} />
      <Route exact={true} path={CHECKOUT} component={CheckoutPage} />
      <Route exact={true} path={TRACKORDER} component={TrackOrderPage} />
    </Switch>
  );
};

export default Routes;
