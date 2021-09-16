import React, { Fragment, useCallback, useState } from "react";

import SignUp from "../components/SignUp/Signup";
import { signUp } from "../services/auth";
import Notification from "../common/Notification/Notification";
import { updateObject } from "../utils/updateObject";
import { checkValidity } from "../utils/validations";

const signupFormInitialState = {
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
  password: {
    value: "",
    validation: {
      isPassword: true,
      isSignup: true,
      required: true,
      minLength: 8,
      maxLength: 16,
      validationMsg: { msg: "SignUp.Validations.Password", length: "" },
    },
    valid: false,
    touched: false,
  },
  confirmPassword: {
    value: "",
    validation: {
      validationMsg: { msg: "SignUp.Validations.ConfirmPassword" },
    },
    valid: false,
    touched: false,
  },
  mobileNumber: {
    value: "",
    validation: {
      required: true,
      isMobileNo: true,
      validationMsg: { msg: "SignUp.validations.MobileNumber" },
    },
    valid: false,
    touched: false,
  },
  formIsValid: false,
};

const SignupPage = (props) => {
  const [signupForm, setSignupForm] = useState(signupFormInitialState);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const conformPasswordHandler = useCallback(
    ({ target: { value, name } }) => {
      let valid = true;
      let msg = "";
      let formIsValid = true;

      if (!value) {
        valid = false;
        formIsValid = false;
        msg = "SignUp.Validations.ConfirmPassword";
      } else if (
        signupForm.password.value &&
        signupForm.password.value !== value
      ) {
        valid = false;
        formIsValid = false;
        msg = "SignUp.Validations.PasswordNotMatched";
      }

      const updatedForm = updateObject(signupForm, {
        [name]: updateObject(signupForm[name], {
          value: value,
          valid: valid,
          validation: updateObject(signupForm[name].validation, {
            validationMsg: { msg },
          }),
          touched: true,
        }),
      });
      setSignupForm({ ...updatedForm, formIsValid: formIsValid });
    },
    [signupForm]
  );

  const formChangeHandler = ({ target: { value, name } }) => {
    const validation = checkValidity(value, signupForm[name].validation);
    const updatedSignupForm = updateObject(signupForm, {
      [name]: updateObject(signupForm[name], {
        value: value,
        valid: validation.valid,
        validation: updateObject(signupForm[name].validation, {
          validationMsg: validation.validationMsg,
        }),
        touched: true,
      }),
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedSignupForm) {
      if (typeof updatedSignupForm[inputIdentifier] === "object") {
        formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
      }
    }

    setSignupForm({ ...updatedSignupForm, formIsValid });
  };

  const signupHandler = async () => {
    if (signupForm.password.value !== signupForm.confirmPassword.value) {
      const updatedFormDetails = updateObject(signupForm, {
        confirmPassword: updateObject(signupForm.confirmPassword, {
          valid: false,
          validation: updateObject(signupForm.confirmPassword.validation, {
            validationMsg: { msg: "SignUp.Validations.PasswordNotMatched" },
          }),
          touched: true,
        }),
      });
      setSignupForm({ ...updatedFormDetails, formIsValid: false });
    } else {
      try {
        const response = await signUp({
          name: signupForm.name.value,
          email: signupForm.email.value,
          mobile: signupForm.mobileNumber.value,
          password: signupForm.password.value,
        });
        setSignupForm(signupFormInitialState);
        if (response) {
          setNotify({
            isOpen: true,
            message: "Account is created successfully",
            type: "success",
          });
        }
      } catch (err) {
        setSignupForm(signupFormInitialState);
        setNotify({ isOpen: true, message: err.message, type: "error" });
      }
    }
  };

  return (
    <Fragment>
      <SignUp
        isDisplayImage={
          props?.isDisplayImage === false ? props.isDisplayImage : true
        }
        userCheckoutStyles={
          props?.userCheckoutStyles ? props?.userCheckoutStyles : false
        }
        signupForm={signupForm}
        conformPasswordHandler={conformPasswordHandler}
        formChangeHandler={formChangeHandler}
        signupHandler={signupHandler}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default SignupPage;
