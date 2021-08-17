import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

import Pickup from "./Pickup";
import Delivery from "./Delivery";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";

export const Shipping = () => {
  const classes = checkoutStyles();
  
  const [shippingType, setShippingType] = useState();
  const handleShippingType = (event, newValue) => {
    setShippingType(newValue);
  };

  let renderShippingType;
  if (shippingType === "pickup") {
    renderShippingType = <Pickup />;
  } else if (shippingType === "delivery") {
    renderShippingType = <Delivery />;
  }

  return (
    <Paper
      elevation={12}
      style={{
        width: "60%",
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
          onChange={handleShippingType}
        >
          <FormControlLabel
            value="pickup"
            control={<RadioButton />}
            label="Pickup"
          />
          <FormControlLabel
            value="delivery"
            control={<RadioButton />}
            label="Delivery"
          />
        </RadioGroup>
      </FormControl>

      {renderShippingType}

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
  );
};
