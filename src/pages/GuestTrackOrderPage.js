import React, { useCallback, useState } from "react";

import GuestTrackOrder from "../components/GuestTrackOrder/GuestTrackOrder";
import { ORDERS } from "../constants/routes";
import { checkValidity } from "../utils/validations";

const trackOrderInitialState = {
  trackOrderId: {
    value: "",
    valid: true,
    validationMsg: "TrackOrder.Validations.OrderTrackId",
  },
  email: {
    value: "",
    valid: true,
    validation: {
      required: true,
      isEmail: true,
      maxLength: 32,
      validationMsg: { msg: "SignIn.Validations.Email", length: "" },
    },
  },
  formIsValid: false,
};

const GuestTrackOrderPage = (props) => {
  const [trackOrderForm, setTrackOrderForm] = useState(trackOrderInitialState);
  const [submit, setSubmit] = useState(false);

  const formChangeHandler = useCallback(
    ({ target: { value, name } }) => {
      let updatedForm;
      if (name === "email") {
        const { validationMsg, valid: isValid } = checkValidity(
          value,
          trackOrderForm[name].validation
        );
        updatedForm = {
          ...trackOrderForm,
          [name]: {
            ...trackOrderForm[name],
            value: value,
            valid: isValid,
            validation: {
              ...trackOrderForm[name].validation,
              validationMsg: validationMsg,
            },
          },
        };
      } else {
        const valid = value ? true : false;
        updatedForm = {
          ...trackOrderForm,
          [name]: {
            ...trackOrderForm[name],
            value: value,
            valid,
          },
        };
      }

      let formIsValid = true;
      for (let inputIdentifier in updatedForm) {
        if (typeof updatedForm[inputIdentifier] === "object") {
          formIsValid =
            updatedForm[inputIdentifier].value !== "" && formIsValid;
        }
      }
      setTrackOrderForm({ ...updatedForm, formIsValid });
    },
    [trackOrderForm]
  );

  const submitHandler = useCallback(() => {
    if (trackOrderForm.formIsValid === false) {
      setTrackOrderForm((previousTrackOrderForm) => {
        let updatedForm = { formIsValid: false };
        for (let inputIdentifier in previousTrackOrderForm) {
          if (typeof previousTrackOrderForm[inputIdentifier] === "object") {
            updatedForm[inputIdentifier] = {
              ...previousTrackOrderForm[inputIdentifier],
              valid: false,
            };
          }
        }
        return updatedForm;
      });
    } else {
      setSubmit(true);
      props.history.push(ORDERS, {
        orderId: trackOrderForm.trackOrderId.value,
        userEmail: trackOrderForm.email.value,
      });
    }
  }, [
    trackOrderForm.formIsValid,
    trackOrderForm.trackOrderId.value,
    trackOrderForm.email.value,
    props.history,
  ]);

  return (
    <GuestTrackOrder
      trackOrderForm={trackOrderForm}
      formChangeHandler={formChangeHandler}
      submitHandler={submitHandler}
      submit={submit}
    />
  );
};

export default GuestTrackOrderPage;
