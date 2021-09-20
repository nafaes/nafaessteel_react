import React from "react";

export const SigninPage = React.lazy(() => import("./Signin"));
export const SignupPage = React.lazy(() => import("./Signup"));
export const ForgotPasswordPage = React.lazy(() => import("./ForgotPasswordPage"));
export const ResetPasswordPage = React.lazy(() => import("./ResetPasswordPage"));
export const LandingPage = React.lazy(() => import("./Landing"));
export const ItemsPage = React.lazy(() => import("./ItemsPage"));
export const AddToCartPage = React.lazy(() => import("./AddToCartPage"));
export const CartPage = React.lazy(() => import("./CartPage"));
export const CheckoutPage = React.lazy(() => import("./CheckoutPage"));
export const OrdersPage = React.lazy(() => import("./Orders"));
export const TrackOrdersPage = React.lazy(() => import("./TrackOrder"));
export const PaymentSuccess = React.lazy(() => import("./PaymentSuccess"));
export const PaymentFail = React.lazy(() => import("./PaymentFail"));
