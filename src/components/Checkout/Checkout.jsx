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
import { Link } from "react-router-dom";
import { Shipping } from "./Shipping/Shipping";
import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../common/RadioButton/RadioButton";
import UserCheckout from "./UserCheckout/UserCheckout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const ScrollableTabsButtonForce = () => {
  const classes = checkoutStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.checkoutRoot}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="CheckOut" icon={<ContactsIcon />} {...a11yProps(0)} />
          <Tab
            label="Shipping"
            icon={<LocalShippingIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Order Summary"
            icon={<ShoppingCartIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Payment Method"
            icon={<PaymentIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        {/* <FormControl component="fieldset" fullWidth>
          <RadioGroup
            defaultValue="guest"
            aria-label="gender"
            name="customized-radios"
            className={classes.radioContainer}
            fullWidth
          >
            <FormControlLabel
              value="guest"
              control={<RadioButton />}
              label="As Guest"
            />
            <FormControlLabel
              value="member"
              control={<RadioButton component={Link} to="/signin" />}
              label="As Member"
            />
            <FormControlLabel
              value="register"
              control={<RadioButton component={Link} to="/signup" />}
              label="Register"
            />
          </RadioGroup>
        </FormControl> */}

        {/* <Grid container justifyContent="center">
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
        </Grid> */}
        <UserCheckout />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Shipping />
      </TabPanel>

      <TabPanel value={value} index={2}>
        Order Summary
      </TabPanel>
      <TabPanel value={value} index={3}>
        Payment Method
      </TabPanel>
    </div>
  );
};

export default ScrollableTabsButtonForce;
