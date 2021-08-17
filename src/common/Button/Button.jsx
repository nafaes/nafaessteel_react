import React from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import clsx from "clsx";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";

const CheckoutButton = () => {
  const classes = checkoutStyles();
  return (
  
      <Button
        type="submit"
        size="small"
        fullWidth
        margin="dense"
        spacing={1}
        className={classes.checkNextButton}
        endIcon={<NavigateNextOutlinedIcon style={{ fontSize: "1.5rem" }} />}
      >
        Next
      </Button>
   
  );
};

export default CheckoutButton;
