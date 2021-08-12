import React from "react";
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
import { Button, Divider, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

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

function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  checkoutRoot: {
    flexGrow: 1,
    width: "55%",
    marginTop: "2em",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
  notchedOutline: {
    borderColor: "#0086b3 !important",
  },
  formTextfield: {
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#0086b3 !important",
    },
    "& .MuiOutlinedInput-inputAdornedStart": {
      height: "8px",
    },
  },
}));

const ScrollableTabsButtonForce = () => {
  const classes = useStyles();
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
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            defaultValue="guest"
            aria-label="gender"
            name="customized-radios"
            className={classes.radioContainer}
            fullWidth
          >
            <FormControlLabel
              value="guest"
              control={<StyledRadio />}
              label="As Guest"
            />
            <FormControlLabel
              value="member"
              control={<StyledRadio component={Link} to="/signin" />}
              label="As Member"
            />
            <FormControlLabel
              value="register"
              control={<StyledRadio component={Link} to="/signup" />}
              label="Register"
            />
          </RadioGroup>
        </FormControl>

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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper
          elevation={12}
          style={{
            width: "50%",
            margin: "0px auto",
            padding: "1em 0px 1em 0px",
            borderRadius: "1em",
          }}
        >
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label=""
              name="customized-radios"
              className={classes.radioContainer}
              fullWidth
            >
              <FormControlLabel
                value="pickup"
                control={<StyledRadio />}
                label="Pickup"
              />
              <FormControlLabel
                value="member"
                control={<StyledRadio />}
                label="Delivery"
              />
            </RadioGroup>
          </FormControl>
          <Grid
            container
            justifyContent="center"
            spacing={1}
            style={{
              border: "1px solid #0086b3",
              width: "50%",
              margin: "1em auto 0px auto",
              padding: ".2em 0px 0px 0px",
              verticalAlign: "bottom",
              borderRadius: "1em",
              backgroundColor: "#f2f2f2",
            }}
          >
            <Grid item>
              <DateRangeOutlinedIcon style={{ color: "#0086b3" }} />
            </Grid>
            <Grid
              item
              style={{ fontSize: "0.95rem", fontWeight: "600", color: "#333" }}
            >
              Pickup Date:
            </Grid>
            <Divider style={{width: "80%",backgroundColor:"#0086b3"}} />
            <Grid
              item
              style={{ fontSize: "0.95rem", fontWeight: "600", color: "#333" }}
            >
              12/10/2021
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid
              item
              style={{
                marginTop: "1em",
                borderRadius: "1em",
                width: "50%",
                padding: ".1em 0px",
                background: "rgba(0, 134, 179, 0.8)",
              }}
            >
              <Button
                type="submit"
                size="small"
                fullWidth
                margin="dense"
                spacing={1}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#fff",
                }}
                endIcon={
                  <NavigateNextOutlinedIcon style={{ fontSize: "1.5rem" }} />
                }
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
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
