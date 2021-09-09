import React, { useCallback, useState } from "react";

import SignUp from "../components/SignUp/Signup";
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
      validationMsg: "Name Required!",
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
      validationMsg: "Email Required!",
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
      validationMsg: "Password Required!",
    },
    valid: false,
    touched: false,
  },
  confirmPassword: {
    value: "",
    validation: {
      required: true,
      isConfirmPassword: true,
      minLength: 8,
      maxLength: 16,
      validationMsg: "Confirm Password Required!",
    },
    valid: false,
    touched: false,
  },
  mobileNumber: {
    value: "",
    validation: {
      required: true,
      isMobileNo: true,
      validationMsg: "Mobile Number Required!",
    },
    valid: false,
    touched: false,
  },
  formIsValid: false,
};

const SignupPage = (props) => {
  const [signupForm, setSignupForm] = useState(signupFormInitialState);

  // const conformPasswordHandler = useCallback(
  //   ({ target: { value, name } }) => {
  //     let valid = true;
  //     let validationMsg = "";
  //     let formIsValid = true;

  //     if (signupForm.password.value && signupForm.password.value !== value) {
  //       valid = false;
  //       validationMsg = "Not matched with password!";
  //       formIsValid = false;
  //     }

  //     const updatedForm = updateObject(signupForm, {
  //       [name]: updateObject(signupForm[name], {
  //         value: value,
  //         valid: valid,
  //         validation: updateObject(signupForm[name].validation, {
  //           validationMsg: validationMsg,
  //         }),
  //         touched: true,
  //       }),
  //     });
  //     setSignupForm({ ...updatedForm, formIsValid: formIsValid });
  //   },
  //   [signupForm]
  // );

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

  const signupHandler = () => {
    if (signupForm.password.value !== signupForm.confirmPassword.value) {
      const updatedFormDetails = updateObject(signupForm, {
        confirmPassword: updateObject(signupForm.confirmPassword, {
          valid: false,
          validation: updateObject(signupForm.confirmPassword.validation, {
            validationMsg: "Password not matched",
          }),
          touched: true,
        }),
      });
      setSignupForm({ ...updatedFormDetails, formIsValid: false });
    }
  };

  return (
    <SignUp
      isDisplayImage={
        props?.isDisplayImage === false ? props.isDisplayImage : true
      }
      userCheckoutStyles={
        props?.userCheckoutStyles ? props?.userCheckoutStyles : false
      }
      signupForm={signupForm}
      formChangeHandler={formChangeHandler}
      signupHandler={signupHandler}
    />
  );
};

export default SignupPage;
