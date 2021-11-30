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
import { getOtp, getPaymentURL, saveOrder } from "../services/checkout";

const CHECKOUT = "CHECKOUT";
const SHIPPING = "SHIPPING";
const PAYMENT = "PAYMENT";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const checkoutProcessInitialState = {
  isCheckoutDisabled: false,
  isShippingDisabled: true,
  isOrderSummaryDisabled: true,
  isPaymentDisabled: true,
};

const checkoutProcessReducer = (state, { type }) => {
  switch (type) {
    case CHECKOUT:
      return {
        ...state,
        isCheckoutDisabled: false,
      };

    case SHIPPING:
      return {
        ...state,
        isShippingDisabled: false,
      };

    case PAYMENT:
      return {
        ...state,
        isPaymentDisabled: false,
      };

    case LOGIN:
      return {
        ...state,
        isCheckoutDisabled: true,
        isShippingDisabled: false,
      };

    case LOGOUT:
      return {
        ...state,
        isCheckoutDisabled: false,
        isShippingDisabled: true,
        isPaymentDisabled: true,
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

export const shippingFormInitialState = {
  area: {
    value: "",
    valid: true,
    validationMsg: "Shipping.Validations.Area",
  },
  shippingCharges: {
    value: 0,
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

export const otpFormState = {
  otp: {
    value: "",
    valid: true,
    validationMsg: "Please enter OTP",
  },
  formIsValid: false,
};


export const CheckoutContext = createContext();

const CheckoutPage = () => {
  const {
    languageId,
    userState: { isAuthenticated, userEmail },
    cartState: { items: cartItems, totalAmount },
  } = useContext(GlobalContext);
  const [tabValue, setTabValue] = useState(0);
  const [checkoutProcess, dispatchCheckoutProcess] = useReducer(
    checkoutProcessReducer,
    checkoutProcessInitialState
  );

  const [userType, setUserType] = useState("guest");
  const [guestForm, setGuestForm] = useState(guestFormInitialState);
  const [shippingForm, setShippingForm] = useState(shippingFormInitialState);
  const [otpForm, setOtpForm] = useState(otpFormState);
  const [shippingType, setShippingType] = useState("");
  const [deliveryDate, setDeliveryDate] = useState();
  const [paymentType, setPaymentType] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 

  const handleUserType = useCallback((event, newvalue) => {
    setUserType(newvalue);
  }, []);

  const handleShippingType = useCallback((event, newValue) => {
    console.log(newValue);
    setShippingType(newValue);
  }, []);

  const handleTabChange = useCallback((event, newValue) => {
    switch (newValue) {
      case 1:
        dispatchCheckoutProcess({ type: SHIPPING });
        setTabValue(1);
        break;
      case 2:
        dispatchCheckoutProcess({ type: PAYMENT });
        setTabValue(2);
        break;
      default:
        setTabValue(0);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatchCheckoutProcess({ type: LOGIN });
      setTabValue(1);
    } else {
      dispatchCheckoutProcess({ type: LOGOUT });
      setTabValue(0);
    }
  }, [isAuthenticated]);

  const checkoutHandler = useCallback(async () => {
    // Validations
    let isCheckoutValid = true;
    setErrorVisible(true);
    if (isAuthenticated === false) {
      if (userType === "guest" && guestForm.formIsValid === false) {
        isCheckoutValid = false;
        setTabValue(0);
        setGuestForm((guestForm) => {
          let updatedForm = { formIsValid: false };
          for (let inputIdentifier in guestForm) {
            if (typeof guestForm[inputIdentifier] === "object") {
              updatedForm[inputIdentifier] = {
                ...guestForm[inputIdentifier],
                touched: true,
              };
            }
          }
          return updatedForm;
        });
      } else if (userType !== "guest") {
        setTabValue(0);
        isCheckoutValid = false;
      }
    }
    // console.log(shippingForm,"shippingForm")
    if (shippingType === "delivery" && shippingForm.formIsValid === false) {
      isCheckoutValid = false;
      setPaymentLoading(false);
      setTabValue(1);
      setShippingForm((previousShippingForm) => {      
        let updatedForm = { formIsValid: false };
        for (let inputIdentifier in previousShippingForm) {      
          if (typeof previousShippingForm[inputIdentifier] === "object") {
            updatedForm[inputIdentifier] = {
              ...previousShippingForm[inputIdentifier],
              valid: false,
            };
          }
        }
        return updatedForm;
      });
    }    
    console.log(otpForm,"otpForm")
    if (paymentType === "PAYMENTONDELIVERY" && otpForm.formIsValid === false) {
      isCheckoutValid = false;
      setPaymentLoading(false);
      setOtpForm((previousOtpForm) => {          
        let updatedForm = { formIsValid: false };
        for (let inputIdentifier in previousOtpForm) {      
          if (typeof previousOtpForm[inputIdentifier] === "object") {        
            updatedForm[inputIdentifier] = {
              ...previousOtpForm[inputIdentifier],
              valid: false,            
            };
          }
        }
        return updatedForm;
      });
    }
  

    if (isCheckoutValid) {
      console.log(isCheckoutValid)
      setPaymentLoading(true);
      // Preparing the data
      let userDetails;
      if (isAuthenticated) {
        userDetails = {
          type: "registered",
          email: userEmail,
        };
      } else {
        userDetails = {
          type: "guest",
          name: guestForm.name.value,
          email: guestForm.email.value,
          mobile: guestForm.mobileNumber.value,
        };
      }

      let shipping = { type: "pickup", deliveryDate };
      if (shippingType === "delivery") {
        shipping = {
          type: "delivery",
          deliveryDate,
          cityId: shippingForm.area.value,
          charges: shippingForm.shippingCharges.value,
          block: shippingForm.block.value,
          street: shippingForm.street.value,
          plot: shippingForm.plot.value,
        };
      }

      const items = cartItems.map(({ itemId, quantity, price }) => {
        return {
          id: itemId,
          quantity,
          price,
        };
      });

      let totalShipping = totalAmount + shippingForm.shippingCharges.value
      console.log(totalShipping)


      console.log(otpForm.otp.value,"line312")

      const response = await getPaymentURL({
        amount: totalShipping,
        lng: "EN",
        email: userDetails.email,
        paymentType: paymentType,
      }, languageId); 

     
      let saveResponse; 

      try{
        saveResponse = await saveOrder({
          user: userDetails,
          shipping,
          items,
          payment: {
            referenceNo: response.referenceno,
            paymentType: response.paymentmode,
            otp: otpForm.otp.value,
          },
        }, languageId);
      }
      catch(error){
          if (error.response) {
          const { code, message } = error.response.data;
          if (code === 417) {
            setErrorMessage(message);
            console.log(message);
            throw error;
          }
        }
      }
      
      // If user selects KNET payment
      if (saveResponse?.url) {
        window.location = saveResponse.url;
      } else {
        window.location = response.paymenturl;
      }
    }

   
    
  }, [
    languageId,
    isAuthenticated,
    cartItems,
    guestForm,
    shippingForm,
    otpForm,
    userType,
    shippingType,
    userEmail,
    deliveryDate,
    paymentType,
    totalAmount,
  ]);

  const context = {
    tabValue,
    handleTabChange,
    userType,
    handleUserType,
    checkoutProcess,
    guestForm,
    setGuestForm,
    shippingType,
    handleShippingType,
    shippingForm,
    setShippingForm,
    shippingCharges: shippingForm.shippingCharges.value,
    deliveryDate,
    setDeliveryDate,
    paymentType,
    setPaymentType,
    checkoutHandler,
    paymentLoading,
    errorVisible,
    otpForm,
    setOtpForm,
    errorMessage,
  };

  return (
    <CheckoutContext.Provider value={context}>
      <CheckoutContainer />
    </CheckoutContext.Provider>
  );
};

export default CheckoutPage;
