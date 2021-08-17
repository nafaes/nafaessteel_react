import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContactsIcon from "@material-ui/icons/Contacts";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Paper from "@material-ui/core/Paper";
import { Divider, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import Guest from "./Guest";
import RadioButton from "../../../common/RadioButton/RadioButton";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import SignIn from "../../SignIn/Signin";
import SignUp from "../../SignUp/Signup";
import CheckoutButton from "../../../common/Button/Button";

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
      <SignIn isDisplayImage={false} userCheckoutStyles={true} />
    );
  } else if (userType === "register") {
    renderUserType = (
      <SignUp isDisplayImage={false} userCheckoutStyles={true} />
    );
  }

  return (
    <Paper>
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

      <Grid container justifyContent="center" >
        <Grid item className={clsx(classes.checkNextButtonGridItem)} style={{width:"50%",margin: "0px auto"}}>
          <CheckoutButton />
        </Grid>
      </Grid>

    </Paper>
  );
};

export default UserCheckout;
