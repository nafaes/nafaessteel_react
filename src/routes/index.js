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
  PAYMENTSUCCESS,
  PAYMENTFAIL,
  FORGOTPASSWORD,
  RESETPASSWORD,
} from "../constants/routes";
import {
  AddToCartPage,
  CartPage,
  CheckoutPage,
  ForgotPasswordPage,
  ItemsPage,
  LandingPage,
  OrdersPage,
  PageNotFound,
  PaymentFail,
  PaymentSuccess,
  ResetPasswordPage,
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
        <Route exact={true} path={LANDING} component={LandingPage} />
        <Route exact={true} path={ITEMS} component={ItemsPage} />
        <Route exact={true} path={ADDTOCART} component={AddToCartPage} />
        <Route exact={true} path={CART} component={CartPage} />
        <Route exact={true} path={CHECKOUT} component={CheckoutPage} />
        <Route exact={true} path={ORDERS} component={OrdersPage} />
        <Route exact={true} path={TRACKORDER} component={TrackOrdersPage} />
        <Route exact={true} path={PAYMENTSUCCESS} component={PaymentSuccess} />
        <Route exact={true} path={PAYMENTFAIL} component={PaymentFail} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
