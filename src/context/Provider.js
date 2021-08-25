import React, { createContext, useEffect, useMemo, useReducer } from "react";
import cartReducer from "./reducers/cartReducer";

export const GlobalContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
const cartInitilState = {
  items: cartFromLocalStorage ? cartFromLocalStorage : [],
};

const GlobalProvider = ({ children }) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    cartInitilState
  );

  const totalCartItems = useMemo(() => {
    return cartState.items.reduce((totalQuantity, { quantity }) => {
      return totalQuantity + Number(quantity);
    }, 0);
  }, [cartState]);

  const totalCartAmount = useMemo(() => {
    return cartState.items.reduce((total, { quantity, price }) => {
      return total + quantity * price;
    }, 0);
  }, [cartState]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.items));
  }, [cartState]);

  const context = {
    cartItems: cartState.items,
    totalCartItems,
    totalCartAmount,
    dispatchCartActions: dispatchCartActions,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
