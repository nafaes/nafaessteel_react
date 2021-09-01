import React, { Fragment, useState } from "react";

import SignIn from "../components/SignIn/Signin";
import Notification from "../common/Notification/Notification";
import { updateObject } from "../utils/updateObject";
import { checkValidity } from "../utils/validations";

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
      minLength: 8,
      maxLength: 16,
      validationMsg: "SignIn.Validations.Password",
    },
    valid: false,
    touched: false,
  },
};

const SigninPage = (props) => {
  const [signinForm, setSigninForm] = useState(signinFormInitialState);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const formChangeHandler = (event) => {
    const {
      target: { value, name },
    } = event;

    const validation = checkValidity(value, signinForm[name].validation);
    const updatedForm = updateObject(signinForm, {
      [name]: updateObject(signinForm[name], {
        value: value,
        valid: validation.valid,
        validation: updateObject(signinForm[name].validation, {
          validationMsg: validation.validationMsg,
        }),
        touched: true,
      }),
    });
    setSigninForm(updatedForm);
  };

  const signinHandler = () => {
    setNotify({isOpen: true, message: "Login Success", type: "success"});
  };

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
      />

      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default SigninPage;
