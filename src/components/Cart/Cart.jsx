import React, { useContext } from "react";
import { Hidden } from "@material-ui/core";

import DesktopCart from "./Desktop/DesktopCart";
import MobileCart from "./Mobile/MobileCart";
import { GlobalContext } from "../../context/Provider";
import EmptyCart from "./EmptyCart";

const CartComponent = () => {
  const { cartState: { totalItems } } = useContext(GlobalContext);

  let cartItems = <EmptyCart />;

  if (totalItems > 0) {
    cartItems = (
      <React.Fragment>
        <Hidden smDown>
          <DesktopCart />
        </Hidden>
        <Hidden mdUp>
          <MobileCart />
        </Hidden>
      </React.Fragment>
    );
  }

  return cartItems;
};

export default CartComponent;
