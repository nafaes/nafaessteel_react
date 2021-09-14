import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContactsIcon from "@material-ui/icons/Contacts";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import UserCheckout from "./UserCheckout/UserCheckout";
import { Shipping } from "./Shipping/Shipping";
import { Payment } from "./Payment/Payment";
// import CheckoutSummary from "./CheckoutSummary";
import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";
import { CheckoutContext } from "../../pages/CheckoutPage";

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
          <Typography component="h1">{children}</Typography>
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

  const {
    tabValue,
    handleTabChange,
    checkoutProcess: {
      isCheckoutDisabled,
      isShippingDisabled,
      isOrderSummaryDisabled,
      isPaymentDisabled,
    },
  } = useContext(CheckoutContext);

  return (
    <Grid item xs={12} sm={12} md={7} lg={7} className={classes.checkoutRoot}>
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="CheckOut"
            icon={<ContactsIcon />}
            {...a11yProps(0)}
            disabled={isCheckoutDisabled}
          />
          <Tab
            label="Shipping"
            icon={<LocalShippingIcon />}
            {...a11yProps(1)}
            disabled={isShippingDisabled}
          />
          <Tab
            label="Order Summary"
            icon={<ShoppingCartIcon />}
            {...a11yProps(2)}
            disabled={isOrderSummaryDisabled}
          />
          <Tab
            label="Payment Method"
            icon={<PaymentIcon />}
            {...a11yProps(3)}
            disabled={isPaymentDisabled}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <UserCheckout />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Shipping />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        {/* <CheckoutSummary /> */}
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Payment />
      </TabPanel>
    </Grid>
  );
};

export default ScrollableTabsButtonForce;
