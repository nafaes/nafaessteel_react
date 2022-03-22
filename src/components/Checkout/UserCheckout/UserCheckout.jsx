import React, { useCallback, useContext } from "react";
import clsx from "clsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import Guest from "./Guest";
import RadioButton from "../../../common/RadioButton/RadioButton";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import CheckoutButton from "../../../common/Button/Button";
import SigninPage from "../../../pages/Signin";
import SignupPage from "../../../pages/Signup";
import { CheckoutContext } from "../../../pages/CheckoutPage";

const UserCheckout = () => {
  const { handleTabChange, guestForm, setGuestForm, userType, handleUserType} = useContext(CheckoutContext);
  const { t } = useTranslation();
  const classes = checkoutStyles(); 

  const submitDetailsHandler = useCallback(() => {
    if (userType === "guest" ) {
      if (!guestForm.formIsValid) {
        setGuestForm((guestForm) => {
          let updatedForm = { formIsValid: false };
          for (let inputIdentifier in guestForm) {
            if (typeof guestForm[inputIdentifier] === "object") {
              updatedForm[inputIdentifier] = {
                ...guestForm[inputIdentifier],
                touched: true,
              };
            }
          }
          return updatedForm;
        });
      } else {
        console.log(userType)
        handleTabChange(undefined, 1);
      }
    }
  }, [userType, guestForm.formIsValid, setGuestForm, handleTabChange]);


  let renderUserType;
  if (userType === "guest") {
    renderUserType = <Guest />;
  } else if (userType === "member") {
    renderUserType = (
      <SigninPage isDisplayImage={false} userCheckoutStyles={true} />
    );
  } else if (userType === "register") {
    renderUserType = (
      <SignupPage isDisplayImage={false} userCheckoutStyles={true}/>
    );
  }

  return (
    <Paper
      elevation={12}
      style={{
        width: "80%",
        margin: "0px auto",
        padding: "1em 0px 1em 0px",
        borderRadius: "1em",
      }}
    >
      <FormControl component="fieldset" fullWidth={true}>
        <RadioGroup
          defaultValue="guest"
          aria-label="gender"
          name="customized-radios"
          className={classes.radioContainer}
          onChange={handleUserType}
          value={userType}
        >
          {/* <FormControlLabel
            value="guest"
            control={<RadioButton />}
            label={t("Checkout.AsGuest")}
          /> */}
          <FormControlLabel
            value="member"
            control={<RadioButton />}
            label={t("Checkout.AsMember")}
          />
          <FormControlLabel
            value="register"
            control={<RadioButton />}
            label={t("Checkout.Register")}
          />
        </RadioGroup>
      </FormControl>

      {renderUserType}

      <Grid container justifyContent="center">
        <Grid
          item
          className={clsx(classes.checkNextButtonGridItem)}
          style={{ width: "40%", margin: "0px auto .5em auto" }}
        >
          <CheckoutButton
            onClick={submitDetailsHandler}
            buttonText={t("Checkout.Next")}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCheckout;
