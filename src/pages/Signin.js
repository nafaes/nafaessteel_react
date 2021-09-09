import React, { Fragment, useCallback, useContext, useState } from "react";

import SignIn from "../components/SignIn/Signin";
import Notification from "../common/Notification/Notification";
import { updateObject } from "../utils/updateObject";
import { checkValidity } from "../utils/validations";
import { GlobalContext } from "../context/Provider";
import { login } from "../context/actions/authActions";

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
      validationMsg: { msg: "SignIn.Validations.Password", length: ""},
    },
    valid: false,
    touched: false,
  },
};

const SigninPage = (props) => {
  const {
    dispatchAuthActions,
    userState: { loading: loginLoading },
  } = useContext(GlobalContext);

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
          validationMsg: validation.validationMsg
        }
      }
    }

    // const updatedForm = updateObject(signinForm, {
    //   [name]: updateObject(signinForm[name], {
    //     value: value,
    //     valid: validation.valid,
    //     validation: updateObject(signinForm[name].validation, {
    //       validationMsg: validation.validationMsg,
    //     }),
    //     touched: true,
    //   }),
    // });

    setSigninForm(updatedForm)
  };

  const signinHandler = useCallback(async () => {
    if (!signinForm.email.valid || !signinForm.password.valid) {
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
      login(
        signinForm.email.value,
        signinForm.password.value,
        dispatchAuthActions
      )((errorMessage) => {
        setNotify({ isOpen: true, message: errorMessage, type: "error" });
      });
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
    }
  }, [
    signinForm.email.value,
    signinForm.email.valid,
    signinForm.password.value,
    signinForm.password.valid,
    dispatchAuthActions,
  ]);

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
