import React, { useContext } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
  
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PaymentIcon from '@material-ui/icons/Payment';

import { CheckoutContext } from "../../../pages/CheckoutPage";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";

export const Payment = () => {
  const { checkoutHandler, paymentType, setPaymentType, paymentLoading, errorVisible } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const classes = checkoutStyles();
  

  const handlePaymentType = (event, newValue) => {
    setPaymentType(newValue);
  };

  return (
    <Paper
      elevation={12}
      style={{
        width: "100%",
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
          value={paymentType}
          onChange={handlePaymentType}
        >
          <FormControlLabel
            value="PAYMENTONDELIVERY"
            control={<RadioButton />}
            label= {t("Checkout.PaymentOnDelivery")}
            className={classes.paymentRadioBtns}
          />
          <FormControlLabel
            value="KNET"
            control={<RadioButton />}
            label={t("Checkout.CheckoutUsingKNET")}
            className={classes.paymentRadioBtns}
          />
        </RadioGroup>

       
      </FormControl>

        
      {!paymentType && errorVisible &&
          <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body1" style={{color: "red"}}>
                {t("Checkout.SelectPaymentType")}
                </Typography>
              </Grid>
          </Grid>} 

      <Grid container justifyContent="center">
        <Grid
          item
          style={{
            marginTop: "0.8em",
            width: "50%",
            padding: ".1em 0px",
            textAlign: "center"
          }}
        >
          <div className={classes.buttonWrapper}>
            <Button
              size="small"
              margin="dense"
              spacing={1}
              color="primary"
              variant="contained"
              onClick={checkoutHandler.bind(null)}
              // disabled={paymentType === "" ? true : false || paymentLoading}
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#fff",
                borderRadius: "1em",
                width: "50%",
                background: 'linear-gradient(45deg, #0086b3 30%, #51a8c4 90%)'
              }}
              endIcon={
                <PaymentIcon style={{ fontSize: "1.3rem" }} />
              }
            >
              {t("Checkout.Pay")}
            </Button>
            {paymentType !== "" ? paymentLoading && (
              <CircularProgress size={28} className={classes.buttonProgress} />
            ):null}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
