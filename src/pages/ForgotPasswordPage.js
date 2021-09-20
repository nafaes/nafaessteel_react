import React, { Fragment, useState } from "react";

import Notification from "../common/Notification/Notification";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import { forgotPassword } from "../services/passwordActions";
import { checkValidity } from "../utils/validations";

const ForgotPasswordPage = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState({
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
  });

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
    }

    if (email.valid) {
      setSubmit(true);
      const response = await forgotPassword(email.value);
      if (response === 200) {
        setSubmit(false);
        setNotify({
          isOpen: true,
          message: "ForgotPassword.Alerts.Alert1",
          type: "success",
        });
        setEmail({ ...email, value: "", valid: false, touched: false });
      } else if (response === 404) {
        setSubmit(false);
        setNotify({
          isOpen: true,
          message: "ForgotPassword.Alerts.Alert2",
          type: "error",
        });
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
