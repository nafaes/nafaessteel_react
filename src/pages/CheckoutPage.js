import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import CheckoutContainer from "../components/Checkout/CheckoutContainer";
import { GlobalContext } from "../context/Provider";

const CHECKOUT = "CHECKOUT";
const SHIPPING = "SHIPPING";
const ORDER_SUMMARY = "ORDER_SUMMARY";
const PAYMENT = "PAYMENT";

const checkoutProcessInitialState = {
  isCheckoutDisabled: false,
  isShippingDisabled: true,
  isOrderSummaryDisabled: true,
  isPaymentDisabled: true,
};

const checkoutProcessReducer = (state, { type, payload }) => {
  switch (type) {
    case CHECKOUT:
      return {
        ...state,
        isCheckoutDisabled: payload.isDisabled,
      };

    case SHIPPING:
      return {
        ...state,
        isShippingDisabled: false,
      };

    case ORDER_SUMMARY:
      return {
        ...state,
        isOrderSummaryDisabled: false,
      };

    case PAYMENT:
      return {
        ...state,
        isPaymentDisabled: false,
      };

    default:
      return state;
  }
};

const guestFormInitialState = {
  name: {
    value: "",
    validation: {
      required: true,
      isUserName: true,
      minLength: 3,
      maxLength: 40,
      validationMsg: { msg: "SignUp.Validations.Name", length: "" },
    },
    valid: false,
    touched: false,
  },
  email: {
    value: "",
    validation: {
      required: true,
      isEmail: true,
      maxLength: 32,
      validationMsg: { msg: "SignIn.Validations.Email", length: "" },
    },
    valid: false,
    touched: false,
  },
  mobileNumber: {
    value: "",
    validation: {
      required: true,
      isMobileNo: true,
      validationMsg: { msg: "SignUp.Validations.MobileNumber" },
    },
    valid: false,
    touched: false,
  },
  formIsValid: false,
};

const shippingFormInitialState = {
  area: {
    value: "",
    valid: true,
    validationMsg: "Shipping.Validations.Area",
  },
  shippingCharges: {
    value: "",
  },
  block: {
    value: "",
    valid: true,
    validationMsg: "Shipping.Validations.Block",
  },
  street: {
    value: "",
    valid: true,
    validationMsg: "Shipping.Validations.Street",
  },
  plot: {
    value: "",
    valid: true,
    validationMsg: "Shipping.Validations.Plot",
  },
  formIsValid: false,
};

export const CheckoutContext = createContext();

const CheckoutPage = () => {
  const {
    userState: { isAuthenticated },
  } = useContext(GlobalContext);
  const [tabValue, setTabValue] = useState(0);
  const [checkoutProcess, dispatchCheckoutProcess] = useReducer(
    checkoutProcessReducer,
    checkoutProcessInitialState
  );

  const [guestForm, setGuestForm] = useState(guestFormInitialState);
  const [shippingForm, setShippingForm] = useState(shippingFormInitialState);
  const [shippingType, setShippingType] = useState("");
  const [shippingCharges, setShippingCharges] = useState(0);

  const handleShippingType = useCallback((event, newValue) => {
    setShippingType(newValue);
  }, []);

  const handleTabChange = useCallback((event, newValue) => {
    switch (newValue) {
      case 1:
        dispatchCheckoutProcess({ type: SHIPPING });
        setTabValue(1);
        break;
      // case 2:
      //   dispatchCheckoutProcess({ type: ORDER_SUMMARY });
      //   setTabValue(2);
      //   break;
      case 2:
        dispatchCheckoutProcess({ type: PAYMENT });
        setTabValue(2);
        break;
      default:
        setTabValue(0);
    }
    setTabValue(newValue);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatchCheckoutProcess({
        type: CHECKOUT,
        payload: { isDisabled: true },
      });
      dispatchCheckoutProcess({ type: SHIPPING });
      setTabValue(1);
    }
  }, [isAuthenticated]);

  const context = {
    tabValue,
    handleTabChange,
    checkoutProcess,
    guestForm,
    setGuestForm,
    shippingType,
    handleShippingType,
    shippingForm,
    setShippingForm,
    shippingCharges,
    setShippingCharges,
  };

  return (
    <CheckoutContext.Provider value={context}>
      <CheckoutContainer />
    </CheckoutContext.Provider>
  );
};

export default CheckoutPage;
