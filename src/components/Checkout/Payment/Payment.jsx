import React, { useContext, useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Button, FormHelperText, Grid, Typography } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import { useTranslation } from "react-i18next";

import { CheckoutContext } from "../../../pages/CheckoutPage";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";

export const Payment = () => {
  const { checkoutHandler } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const classes = checkoutStyles();

  const [paymentType, setPaymentType] = useState();
  const handlePaymentType = (event, newValue) => {
    setPaymentType(newValue);
  };

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
          onChange={handlePaymentType}
        >
          <FormControlLabel
            value="ondelivery"
            control={<RadioButton />}
            label={t("Checkout.PaymentOnDelivery")}
            className={classes.paymentRadioBtns}
          />
          <FormControlLabel
            value="knet"
            control={<RadioButton />}
            label={t("Checkout.CheckoutUsingKNET")}
            className={classes.paymentRadioBtns}
          />
        </RadioGroup>

        {!paymentType && (
          <FormHelperText
            error={true}
            component="h1"
            style={{ textAlign: "center" }}
          >
            <Typography variant="body1">
              {t("Checkout.SelectPaymentType")}
            </Typography>
          </FormHelperText>
        )}
      </FormControl>

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
            onClick={checkoutHandler.bind(null)}
            disabled={paymentType === undefined ? true : false}
            style={{
              fontSize: "0.95rem",
              fontWeight: "600",
              color: "#fff",
            }}
            endIcon={
              <NavigateNextOutlinedIcon style={{ fontSize: "1.5rem" }} />
            }
          >
            {t("Checkout.Next")}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
