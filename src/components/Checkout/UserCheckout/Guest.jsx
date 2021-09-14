import React, { useContext } from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { useTranslation } from "react-i18next";
// import Paper from "@material-ui/core/Paper";

import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import { checkValidity, isInputNumber } from "../../../utils/validations";
import { updateObject } from "../../../utils/updateObject";
import { CheckoutContext } from "../../../pages/CheckoutPage";

const Guest = () => {
  const { guestForm, setGuestForm } = useContext(CheckoutContext);
  const classes = checkoutStyles();
  const { t } = useTranslation();

  const formChangeHandler = ({ target: { value, name } }) => {
    const validation = checkValidity(value, guestForm[name].validation);
    const updatedGuestForm = updateObject(guestForm, {
      [name]: updateObject(guestForm[name], {
        value: value,
        valid: validation.valid,
        validation: updateObject(guestForm[name].validation, {
          validationMsg: validation.validationMsg,
        }),
        touched: true,
      }),
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedGuestForm) {
      if (typeof updatedGuestForm[inputIdentifier] === "object") {
        formIsValid = updatedGuestForm[inputIdentifier].valid && formIsValid;
      }
    }
    setGuestForm({ ...updatedGuestForm, formIsValid });
  };

  return (
    <Grid container justifyContent="center">
      <div style={{ margin: "2em 0px 1em 0px" }}>
        {/* <Paper elevation={12} style={{ margin: "2em 0px 1em 0px" }}> */}
        <Grid item>
          <TextField
            className={clsx(
              classes.formTextfield
              // classesExternal.formTextfield
            )}
            label="Name"
            required={true}
            id="outlined-start-adornment"
            variant="outlined"
            name="name"
            onChange={formChangeHandler}
            value={guestForm.name.value}
            error={!guestForm.name.valid && guestForm.name.touched}
            helperText={
              !guestForm.name.valid && guestForm.name.touched
                ? t(guestForm.name.validation.validationMsg.msg, {
                    length: guestForm.name.validation.validationMsg.length,
                  })
                : null
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" />
                </InputAdornment>
              ),
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </Grid>
        <Grid item style={{ marginTop: "1em" }}>
          <TextField
            className={clsx(
              classes.formTextfield
              // classesExternal.formTextfield
            )}
            label="Email"
            required={true}
            id="outlined-start-adornment"
            variant="outlined"
            name="email"
            onChange={formChangeHandler}
            value={guestForm.email.value}
            error={!guestForm.email.valid && guestForm.email.touched}
            helperText={
              !guestForm.email.valid && guestForm.email.touched
                ? t(guestForm.email.validation.validationMsg.msg, {
                    length: guestForm.email.validation.validationMsg.length,
                  })
                : null
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon fontSize="small" />
                </InputAdornment>
              ),
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </Grid>
        <Grid item style={{ marginTop: "1em" }}>
          <TextField
            className={clsx(
              classes.formTextfield
              // classesExternal.formTextfield
            )}
            label="Mobile Number"
            required={true}
            id="outlined-start-adornment"
            variant="outlined"
            name="mobileNumber"
            onChange={formChangeHandler}
            onKeyPress={(event) => {
              isInputNumber(event, 8);
            }}
            value={guestForm.mobileNumber.value}
            error={
              !guestForm.mobileNumber.valid && guestForm.mobileNumber.touched
            }
            helperText={
              !guestForm.mobileNumber.valid && guestForm.mobileNumber.touched
                ? t(guestForm.mobileNumber.validation.validationMsg.msg)
                : null
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallIcon fontSize="small" />
                </InputAdornment>
              ),
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </Grid>
      </div>
      {/* </Paper> */}
    </Grid>
  );
};

export default Guest;
