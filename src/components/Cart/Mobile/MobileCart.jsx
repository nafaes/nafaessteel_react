import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Provider";
import CartItems from "./CartItems/CartItems";

const MobileCart = () => {
  const {
    cartState: { totalItems, items, totalAmount },
    dispatchCartActions,
  } = useContext(GlobalContext);

  return (
    <CartItems
      cartItems={items}
      totalCartItems={totalItems}
      totalCartAmount={totalAmount}
      dispatchCartActions={dispatchCartActions}
    />
  );
};

export default MobileCart;
