import React, { useState } from "react";
import clsx from "clsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Guest from "./Guest";
import RadioButton from "../../../common/RadioButton/RadioButton";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import CheckoutButton from "../../../common/Button/Button";
import SigninPage from "../../../pages/Signin";
import SignupPage from "../../../pages/Signup";

const UserCheckout = () => {
  const classes = checkoutStyles();

  const [userType, setUserType] = useState("guest");
  const handleUserType = (event, newvalue) => {
    setUserType(newvalue);
  };

  let renderUserType;
  if (userType === "guest") {
    renderUserType = <Guest />;
  } else if (userType === "member") {
    renderUserType = (
      <SigninPage isDisplayImage={false} userCheckoutStyles={true} />
    );
  } else if (userType === "register") {
    renderUserType = (
      <SignupPage isDisplayImage={false} userCheckoutStyles={true} />
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
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          defaultValue="guest"
          aria-label="gender"
          name="customized-radios"
          className={classes.radioContainer}
          fullWidth
          onChange={handleUserType}
        >
          <FormControlLabel
            value="guest"
            control={<RadioButton />}
            label="As Guest"
          />
          <FormControlLabel
            value="member"
            control={<RadioButton />}
            label="As Member"
          />
          <FormControlLabel
            value="register"
            control={<RadioButton />}
            label="Register"
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
          <CheckoutButton />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCheckout;
