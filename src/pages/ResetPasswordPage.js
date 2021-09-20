import React, { useCallback, useState } from "react";
import { useParams } from "react-router";

import ResetPassword from "../components/ResetPassword/ResetPassword";
import { resetPassword } from "../services/passwordActions";
import { updateObject } from "../utils/updateObject";
import { checkValidity } from "../utils/validations";

const resetPasswordInitialState = {
  newPassword: {
    value: "",
    validation: {
      required: true,
      isPassword: true,
      isResetPassword: true,
      minLength: 8,
      maxLength: 16,
      validationMsg: {
        msg: "ResetPassword.Validations.NewPassword",
        length: "",
      },
    },
    valid: false,
    touched: false,
  },
  confirmPassword: {
    value: "",
    validation: {
      required: true,
      minLength: 8,
      maxLength: 16,
      validationMsg: {
        msg: "ResetPassword.Validations.ConfirmPassword",
        length: "",
      },
    },
    valid: false,
    touched: false,
  },
};

const ResetPasswordPage = () => {
  const { token, email } = useParams();
  const [resetPasswordForm, setResetPasswordForm] = useState(
    resetPasswordInitialState
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const { newPassword, confirmPassword } = resetPasswordForm;
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleShowNewPassword = useCallback(() => {
    setShowNewPassword(!showNewPassword);
  }, [showNewPassword]);

  const handleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword(!showConfirmPassword);
  }, [showConfirmPassword]);

  const inputChangeHandler = (event) => {
    const validation = checkValidity(
      event.target.value,
      resetPasswordForm[event.target.name].validation
    );

    const updatedPasswordDetails = updateObject(resetPasswordForm, {
      [event.target.name]: updateObject(resetPasswordForm[event.target.name], {
        value: event.target.value,
        valid: validation.valid,
        validation: updateObject(
          resetPasswordForm[event.target.name].validation,
          {
            validationMsg: validation.validationMsg,
          }
        ),
        touched: true,
      }),
    });
    setResetPasswordForm({ ...updatedPasswordDetails });
  };

  const confirmPasswordHandler = (event) => {
    let valid = true;
    let validationMsg = { msg: "", length: "" };
    if (newPassword.value !== "") {
      if (newPassword.value !== event.target.value) {
        valid = false;
        validationMsg = {
          msg: "ResetPassword.Validations.PasswordNotMatched",
          length: "",
        };
      } else {
        valid = true;
        validationMsg = { msg: "", length: "" };
      }
    }

    const updatedPasswordDetails = updateObject(resetPasswordForm, {
      [event.target.name]: updateObject(resetPasswordForm[event.target.name], {
        value: event.target.value,
        valid: valid,
        validation: updateObject(
          resetPasswordForm[event.target.name].validation,
          { validationMsg: validationMsg }
        ),
        touched: true,
      }),
    });

    setResetPasswordForm({ ...updatedPasswordDetails });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!newPassword.valid || !confirmPassword.valid) {
      const updatedForm = {
        ...resetPasswordForm,
        newPassword: { ...newPassword, touched: true },
        confirmPassword: { ...confirmPassword, touched: true },
      };
      setResetPasswordForm(updatedForm);
    }

    if (newPassword.valid && confirmPassword.valid) {
      if (newPassword.value !== confirmPassword.value) {
        let validationMsg = {
          msg: "ChangePassword.Validations.NotMatched",
          length: "",
        };
        const updatedPasswordDetails = updateObject(resetPasswordForm, {
          confirmPassword: updateObject(resetPasswordForm.confirmPassword, {
            value: confirmPassword.value,
            valid: false,
            validation: updateObject(
              resetPasswordForm.confirmPassword.validation,
              {
                validationMsg: validationMsg,
              }
            ),
            touched: true,
          }),
        });
        setResetPasswordForm(updatedPasswordDetails);
      }

      if (newPassword.value === confirmPassword.value) {
        const resetPasswordDetails = {
          password: newPassword.value,
          confirmPassword: confirmPassword.value,
          token,
          email,
        };
        setSubmit(true);
        const status = await resetPassword(resetPasswordDetails);
        if (status === 606) {
          setNotify({
            isOpen: true,
            message: "ResetPassword.Alerts.Alert1",
            type: "error",
          });
          setSubmit(false);
        } else if (status === 607) {
          setNotify({
            isOpen: true,
            message: "ResetPassword.Alerts.Alert2",
            type: "error",
          });
          setSubmit(false);
        } else if (status === 608) {
          setNotify({
            isOpen: true,
            message: "ResetPassword.Alerts.Alert3",
            type: "error",
          });
          setSubmit(false);
        } else if (status === 609) {
          setNotify({
            isOpen: true,
            message: "ResetPassword.Alerts.Alert4",
            type: "error",
          });
          setSubmit(false);
        } else if (status === 200) {
          setNotify({
            isOpen: true,
            message: "ResetPassword.Alerts.Alert5",
            type: "success",
          });
          setSubmit(false);
          setResetPasswordForm(resetPasswordInitialState);
          setShowNewPassword(false);
          setShowConfirmPassword(false);
          //   history.push("/signin", {
          //     message: "ResetPassword.Alerts.Alert5",
          //     type: "success",
          //   });
        }
      }
    }
  };

  return (
    <ResetPassword
      notify={notify}
      submit={submit}
      setNotify={setNotify}
      submitHandler={submitHandler}
      resetPasswordForm={resetPasswordForm}
      inputChangeHandler={inputChangeHandler}
      confirmPasswordHandler={confirmPasswordHandler}
      showNewPassword={showNewPassword}
      showConfirmPassword={showConfirmPassword}
      handleShowNewPassword={handleShowNewPassword}
      handleShowConfirmPassword={handleShowConfirmPassword}
    />
  );
};

export default ResetPasswordPage;
