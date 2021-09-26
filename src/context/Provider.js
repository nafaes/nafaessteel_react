import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import i18next from "i18next";
import { DIRECTIONS } from "react-with-direction/dist/DirectionProvider";

import cartReducer from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

export const GlobalContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
const cartInitilState = {
  items: cartFromLocalStorage ? cartFromLocalStorage : [],
};
const authInitialState = {
  loading: false,
  token: null,
  expiresIn: null,
  isAuthenticated: false,
  errorMessage: null,
};

const GlobalProvider = ({ children }) => {
  const [direction, setDirection] = useState(DIRECTIONS.LTR);
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    cartInitilState
  );
  const [userState, dispatchAuthActions] = useReducer(
    authReducer,
    authInitialState
  );

  const languageChangeHandler = useCallback(() => {
    let lang = "ar";
    if (i18next.language === "ar") lang = "en";
    i18next.changeLanguage(lang);
    if (lang === "ar") {
      setDirection(DIRECTIONS.RTL);
    } else {
      setDirection(DIRECTIONS.LTR);
    }
  }, []);

  const languageId = useMemo(() => {
    let langId = 1;
    if (direction === "ltr") langId = 2;
    return langId;
  }, [direction]);

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
    direction,
    languageId,
    languageChangeHandler,
    cartItems: cartState.items,
    totalCartItems,
    totalCartAmount,
    dispatchCartActions,
    userState,
    dispatchAuthActions,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
