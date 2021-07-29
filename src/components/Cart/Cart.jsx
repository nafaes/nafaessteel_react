import React from "react";
import { Hidden } from "@material-ui/core";

import DesktopCart from "./Desktop/DesktopCart";
import MobileCart from "./Mobile/MobileCart";

const CartComponent = () => {
  return (
    <React.Fragment>
      <Hidden smDown>
        <DesktopCart />
      </Hidden>
      <Hidden mdUp>
        <MobileCart />
      </Hidden>
    </React.Fragment>
  );
};

export default CartComponent;
