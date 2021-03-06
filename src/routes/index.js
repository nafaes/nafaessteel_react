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
  PAYMENTSUCCESS,
  PAYMENTFAILED,
  FORGOTPASSWORD,
  RESETPASSWORD,
  TRACKORDER,
  ORDERS,
  GUESTTRACKORDER,
} from "../constants/routes";
import {
  AddToCartPage,
  CartPage,
  CheckoutPage,
  ForgotPasswordPage,
  GuestTrackOrderPage,
  ItemsPage,
  LandingPage,
  OrdersPage,
  PageNotFound,
  PaymentFailed,
  PaymentSuccess,
  ResetPasswordPage,
  SigninPage,
  SignupPage,
  TrackOrdersPage,
} from "../pages";
// import PrivateRoute from "./PrivateRoute";

const Routes = ({ isAuthenticated }) => {
  return (
    <Suspense fallback="Loading">
      <Switch>
        <Route exact={true} path={LANDING} component={LandingPage} />
        <Route exact={true} path={ITEMS} component={ItemsPage} />
        <Route exact={true} path={ADDTOCART} component={AddToCartPage} />
        <Route exact={true} path={CART} component={CartPage} />
        <Route exact={true} path={CHECKOUT} component={CheckoutPage} />
        <Route exact={true} path={PAYMENTSUCCESS} component={PaymentSuccess} />
        <Route exact={true} path={PAYMENTFAILED} component={PaymentFailed} />
        <Route exact={true} path={ORDERS} component={OrdersPage} />
        <Route exact={true} path={TRACKORDER} component={TrackOrdersPage} />
        {isAuthenticated === false ? (
          <>
            <Route exact={true} path={SIGNIN} component={SigninPage} />
            <Route exact={true} path={SIGNUP} component={SignupPage} />
            <Route
              exact={true}
              path={FORGOTPASSWORD}
              component={ForgotPasswordPage}
            />
            <Route
              exact={true}
              path={RESETPASSWORD}
              component={ResetPasswordPage}
            />
            <Route
              exact={true}
              path={GUESTTRACKORDER}
              component={GuestTrackOrderPage}
            />
          </>
        ) : null}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
