import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Provider";
import CartItems from "./CartItems/CartItems";

const MobileCart = () => {
  const { cartItems, totalCartItems, totalCartAmount, dispatchCartActions } = useContext(GlobalContext);

  return (
    <CartItems
      cartItems={cartItems}
      totalCartItems={totalCartItems}
      totalCartAmount={totalCartAmount}
      dispatchCartActions={dispatchCartActions}
    />
  );
};

export default MobileCart;
