import React, { Fragment, useCallback, useContext, useEffect, useState } from "react";

import SignIn from "../components/SignIn/Signin";
import Notification from "../common/Notification/Notification";
import { checkValidity } from "../utils/validations";
import { GlobalContext } from "../context/Provider";
import { accountVerify, login } from "../context/actions/authActions";

const signinFormInitialState = {
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
  password: {
    value: "",
    validation: {
      isPassword: true,
      required: true,
      minLength: 4,
      maxLength: 16,
      validationMsg: { msg: "SignIn.Validations.Password", length: "" },
    },
    valid: false,
    touched: false,
  },
};

const SigninPage = (props) => {
  const {
    dispatchAuthActions,
    userState: { loading: loginLoading},
  } = useContext(GlobalContext);
  const previousPath = props.location?.state?.previousPath;
  const [signinForm, setSigninForm] = useState(signinFormInitialState);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const formChangeHandler = (event) => {
    const { value, name } = event.target;
    const validation = checkValidity(value, signinForm[name].validation);
    const updatedForm = {
      ...signinForm,
      [name]: {
        value: value,
        valid: validation.valid,
        touched: true,
        validation: {
          ...signinForm[name].validation,
          validationMsg: validation.validationMsg,
        },
      },
    };

    setSigninForm(updatedForm);
  };

 
  const signinHandler = useCallback(async (event) => {
    event.preventDefault();
  
    if (!signinForm.email.valid || !signinForm.password.valid) {
      console.log(signinForm.email.valid, "NOTVALID");
      setSigninForm((signinForm) => {
        let updatedForm = {};
        for (let inputIdentifier in signinForm) {
          updatedForm[inputIdentifier] = {
            ...signinForm[inputIdentifier],
            touched: true,
          };
        }
        return updatedForm;
      });
    }


    if (signinForm.email.valid && signinForm.password.valid) {
      console.log(signinForm.email.valid, "VALID");   
      login(signinForm.email.value, signinForm.password.value, dispatchAuthActions, previousPath)
           
        ((errorMessage) => {
          setNotify({ isOpen: true, message: errorMessage, type: "error" });
            setSigninForm((signinForm) => {
            let updatedForm = {};
            for (let inputIdentifier in signinForm) {
              updatedForm[inputIdentifier] = {
                ...signinForm[inputIdentifier],
                value: "",
                valid: false,
                touched: false,
              };
            }
            return updatedForm;
          });
        });
    } 

  },
    [
      signinForm.email.value, signinForm.email.valid, signinForm.password.value, signinForm.password.valid,
      dispatchAuthActions,
      previousPath,
    ]
  );

  return (
    <Fragment>
      <SignIn
        isDisplayImage={
          props?.isDisplayImage === false ? props.isDisplayImage : true
        }
        userCheckoutStyles={
          props?.userCheckoutStyles ? props?.userCheckoutStyles : false
        }
        signinForm={signinForm}
        formChangeHandler={formChangeHandler}
        signinHandler={signinHandler}
        loginLoading={loginLoading}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default SigninPage;
