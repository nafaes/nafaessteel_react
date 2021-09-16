import React from "react";
import { Button } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";

const CheckoutButton = ({ buttonText, onClick = () => {} }) => {
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
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default CheckoutButton;
