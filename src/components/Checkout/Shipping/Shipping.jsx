import React, { useCallback, useContext } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import FormHelperText from "@material-ui/core/FormHelperText";

import Pickup from "./Pickup";
import Delivery from "./Delivery";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";
import { CheckoutContext } from "../../../pages/CheckoutPage";

export const Shipping = () => {
  const { handleTabChange, shippingType, handleShippingType } =
    useContext(CheckoutContext);
  const classes = checkoutStyles();

  const nextHandler = useCallback(() => {
    if (shippingType !== "") {
      handleTabChange(undefined, 3);
    }
  }, [shippingType, handleTabChange]);

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
        width: "80%",
        margin: "0px auto",
        padding: "1em 0px 1em 0px",
        borderRadius: "1em",
      }}
    >
      <FormControl component="fieldset" fullWidth={true}>
        <RadioGroup
          aria-label=""
          name="customized-radios"
          className={classes.radioContainer}
          value={shippingType}
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

        {!shippingType && (
          <FormHelperText style={{textAlign: "center"}}>
            <Typography variant="body1">
            Select Type
            </Typography>
          </FormHelperText>
        )}
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
            background: "rgba(0, 134, 179, 1)",
          }}
        >
          <Button
            type="submit"
            size="small"
            fullWidth
            margin="dense"
            spacing={1}
            onClick={nextHandler}
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
