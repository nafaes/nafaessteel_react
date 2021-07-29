import React from "react";
import { Route, Switch } from "react-router";
import { LANDING, SIGNIN, IRONS, ITEMS, ADDTOCART } from "../constants/routes";
import LandingPage from "../pages/Landing";
import SigninPage from "../pages/Signin";
import IronsPage from "../pages/Irons";
import ItemsPage from "../pages/Items";
import AddToCartPage from "../pages/AddToCart";


const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={LANDING} component={LandingPage} />
      <Route exact={true} path={SIGNIN} component={SigninPage} />
      <Route exact={true} path={IRONS} component={IronsPage} />
      <Route exact={true} path={ITEMS} component={ItemsPage} />
      <Route exact={true} path={ADDTOCART} component={AddToCartPage} />
        {/* <Route exact path="/" />
         <Route exact path="/prices" component={() => <div>Prices</div> }/>
         <Route exact path="/trackyourorder" component={() => <div>TrackYourOrder</div> }/>
         <Route exact path="/aboutUs" component={() => <div>About Us</div> }/>
         <Route exact path="/contactUs" component={() => <div>Contact Us</div> }/>
         <Route exact path="/kuwaitiiron" component={() => <div>Kuwaiti Iron</div> }/>
         <Route exact path="/saudiiron" component={() => <div>Saudi Iron</div> }/>
         <Route exact path="/afganisthaniron" component={() => <div>Afganisthan Iron</div> }/>
         <Route exact path="/ormaniiron" component={() => <div>Ormani Iron</div> }/> */}
    </Switch>
  );
};

export default Routes;
