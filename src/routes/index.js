import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

import {
  LANDING,
  SIGNIN,
  ITEMS,
  ADDTOCART,
  CART,
  CHECKOUT,
  SIGNUP,
  ORDERS,
  TRACKORDER,
} from "../constants/routes";
import {
  AddToCartPage,
  CartPage,
  CheckoutPage,
  ItemsPage,
  LandingPage,
  OrdersPage,
  SigninPage,
  SignupPage,
  TrackOrdersPage,
} from "../pages";

const Routes = () => {
  return (
    <Suspense fallback="Loading">
    <Switch>
      <Route exact={true} path={SIGNIN} component={SigninPage} />
      <Route exact={true} path={SIGNUP} component={SignupPage} />
      <Route exact={true} path={LANDING} component={LandingPage} />
      <Route exact={true} path={ITEMS} component={ItemsPage} />
      <Route exact={true} path={ADDTOCART} component={AddToCartPage} />
      <Route exact={true} path={CART} component={CartPage} />
      <Route exact={true} path={CHECKOUT} component={CheckoutPage} />
      <Route exact={true} path={ORDERS} component={OrdersPage} />
      <Route exact={true} path={TRACKORDER} component={TrackOrdersPage} />
    </Switch>
    </Suspense>
  );
};

export default Routes;
