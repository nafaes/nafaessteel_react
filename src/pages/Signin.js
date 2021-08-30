import React, { useState } from "react";

import SignIn from "../components/SignIn/Signin";
import { updateObject } from "../utils/updateObject";
import { checkValidity } from "../utils/validations";

const signinFormInitialState = {
  email: {
    value: "",
    validation: {
      required: true,
      isEmail: true,
      maxLength: 32,
      validationMsg: "Email Required!",
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
      validationMsg: "Password Required!",
    },
    valid: false,
    touched: false,
  },
};

const SigninPage = (props) => {
  const [signinForm, setSigninForm] = useState(signinFormInitialState);

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

  return (
    <SignIn
      isDisplayImage={props?.isDisplayImage === false ? props.isDisplayImage : true}
      userCheckoutStyles={props?.userCheckoutStyles ? props?.userCheckoutStyles : false}
      signinForm={signinForm}
      formChangeHandler={formChangeHandler}
    />
  );
};

export default SigninPage;
