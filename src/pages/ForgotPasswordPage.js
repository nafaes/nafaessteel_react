import React, { Fragment, useState } from "react";

import Notification from "../common/Notification/Notification";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import { forgotPassword } from "../services/passwordActions";
import { checkValidity } from "../utils/validations";

const emailInitialState = {
  value: "",
  validation: {
    required: true,
    isEmail: true,
    maxLength: 32,
    validationMsg: {
      msg: "ForgotPassword.Validations.EmailRequired",
      length: "",
    },
  },
  valid: false,
  touched: false,
};

const ForgotPasswordPage = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState(emailInitialState);

  const inputChangeHandler = (event) => {
    const validation = checkValidity(event.target.value, email.validation);

    setEmail({
      ...email,
      value: event.target.value,
      valid: validation.valid,
      validation: {
        ...email.validation,
        validationMsg: validation.validationMsg,
      },
      touched: true,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!email.valid) {
      setEmail({ ...email, touched: true });
    } else {
      try {
        setSubmit(true);
        const response = await forgotPassword(email.value);
        setEmail(emailInitialState);
        setSubmit(false);
        setNotify({ isOpen: true, message: response, type: "success" });
      } catch (err) {
        setSubmit(false);
        setEmail(emailInitialState);
        setNotify({ isOpen: true, message: err.message, type: "error" });
      }
    }
  };

  return (
    <Fragment>
      <ForgotPassword
        email={email}
        inputChangeHandler={inputChangeHandler}
        submit={submit}
        submitHandler={submitHandler}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default ForgotPasswordPage;
