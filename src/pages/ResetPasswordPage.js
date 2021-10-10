import React, { Fragment, useCallback, useContext, useState } from "react";
import { useParams } from "react-router";
import Notification from "../common/Notification/Notification";

import ResetPassword from "../components/ResetPassword/ResetPassword";
import { GlobalContext } from "../context/Provider";
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
  const { languageId } = useContext(GlobalContext);

  const handleShowNewPassword = useCallback(() => {
    setShowNewPassword(!showNewPassword);
  }, [showNewPassword]);

  const handleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword(!showConfirmPassword);
  }, [showConfirmPassword]);

  const inputChangeHandler = useCallback(
    (event) => {
      const validation = checkValidity(
        event.target.value,
        resetPasswordForm[event.target.name].validation
      );
      const updatedPasswordDetails = updateObject(resetPasswordForm, {
        [event.target.name]: updateObject(
          resetPasswordForm[event.target.name],
          {
            value: event.target.value,
            valid: validation.valid,
            validation: updateObject(
              resetPasswordForm[event.target.name].validation,
              { validationMsg: validation.validationMsg }
            ),
            touched: true,
          }
        ),
      });
      setResetPasswordForm({ ...updatedPasswordDetails });
    },
    [resetPasswordForm]
  );

  const confirmPasswordHandler = useCallback(
    (event) => {
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
        [event.target.name]: updateObject(
          resetPasswordForm[event.target.name],
          {
            value: event.target.value,
            valid: valid,
            validation: updateObject(
              resetPasswordForm[event.target.name].validation,
              { validationMsg: validationMsg }
            ),
            touched: true,
          }
        ),
      });

      setResetPasswordForm({ ...updatedPasswordDetails });
    },
    [resetPasswordForm, newPassword.value]
  );

  const submitHandler = useCallback(
    async (event) => {
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
          try {
            const resetPasswordDetails = {
              email,
              text: token,
              password: newPassword.value,
            };
            setSubmit(true);
            const response = await resetPassword(
              resetPasswordDetails,
              languageId
            );
            setSubmit(false);
            setNotify({ isOpen: true, message: response, type: "success" });
          } catch (error) {
            setSubmit(false);
            setNotify({ isOpen: true, message: error.message, type: "error" });
          }
          setResetPasswordForm(resetPasswordInitialState);
          setShowNewPassword(false);
          setShowConfirmPassword(false);
        }
      }
    },
    [confirmPassword, languageId, email, newPassword, resetPasswordForm, token]
  );

  return (
    <Fragment>
      <ResetPassword
        submit={submit}
        submitHandler={submitHandler}
        resetPasswordForm={resetPasswordForm}
        inputChangeHandler={inputChangeHandler}
        confirmPasswordHandler={confirmPasswordHandler}
        showNewPassword={showNewPassword}
        showConfirmPassword={showConfirmPassword}
        handleShowNewPassword={handleShowNewPassword}
        handleShowConfirmPassword={handleShowConfirmPassword}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default ResetPasswordPage;
