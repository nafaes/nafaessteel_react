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
const cartInitilState = cartFromLocalStorage
  ? cartFromLocalStorage
  : {
      items: [],
      totalItems: 0,
      totalAmount: 0
    };

const authInitialState = {
  loading: false,
  token: null,
  expiresIn: null,
  userId: "",
  userEmail: "",
  userName: "",
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
    return direction === "ltr" ? 2 : 1;
  }, [direction]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const context = {
    direction,
    languageId,
    languageChangeHandler,
    cartState,
    dispatchCartActions,
    userState,
    dispatchAuthActions,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
