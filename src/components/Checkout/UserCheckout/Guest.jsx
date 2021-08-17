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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Button, Divider, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";



const Guest = () => {
  const classes = checkoutStyles();
    return (
        <Grid container justifyContent="center">
        <Paper elevation={12} style={{ margin: "2em 0px 1em 0px" }}>
          <Grid item>
            <TextField
              className={clsx(
                classes.formTextfield
                // classesExternal.formTextfield
              )}
              label="Name*"
              id="outlined-start-adornment"
              variant="outlined"
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
              label="Email*"
              id="outlined-start-adornment"
              variant="outlined"
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
              label="Mobile Number*"
              id="outlined-start-adornment"
              variant="outlined"
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
        </Paper>
      </Grid>
    )
}

export default Guest
