import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import { useTranslation } from "react-i18next";

import Pickup from "./Pickup";
import Delivery from "./Delivery";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";
import {
  CheckoutContext,
  shippingFormInitialState,
} from "../../../pages/CheckoutPage";
import { getDeliveryDate } from "../../../services/checkout";

export const Shipping = () => {
  const {
    shippingType,
    handleShippingType,
    shippingForm,
    setShippingForm,
    handleTabChange,
    deliveryDate,
    setDeliveryDate,
  } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const classes = checkoutStyles();

  const [errorVisible, setErrorVisible] = useState(false);

  const getDeliveryDateByShippingType = useCallback(async () => {
    if (shippingType !== "") {
      let deliveryType = 0;
      if (shippingType === "delivery") deliveryType = 1;
      const date = await getDeliveryDate(deliveryType);
      setDeliveryDate(date);
    }
  }, [shippingType, setDeliveryDate]);

  useEffect(() => {
    getDeliveryDateByShippingType();
  }, [getDeliveryDateByShippingType]);

  useEffect(() => {
    if (shippingType === "pickup") {
      setShippingForm(shippingFormInitialState);
    }
  }, [shippingType, setShippingForm]);

  const renderShippingType = useMemo(() => {
    if (shippingType === "pickup") {
      return <Pickup deliveryDate={deliveryDate} />;
    } else if (shippingType === "delivery") {
      return <Delivery deliveryDate={deliveryDate} />;
    }
  }, [shippingType, deliveryDate]);

  const nextHandler = useCallback(() => {
    console.log(shippingForm.formIsValid,"nextClicked")
    if(shippingType === ""){
      setErrorVisible(true);
    }
    else if (shippingType === "pickup") {
      handleTabChange(undefined, 2);
    } else if (shippingType === "delivery" && shippingForm.formIsValid) {
      handleTabChange(undefined, 2);
    } else if (
      shippingType === "delivery" &&
      shippingForm.formIsValid === false
    ) {
      setShippingForm((previousShippingForm) => {
        let updatedForm = { formIsValid: false };
        for (let inputIdentifier in previousShippingForm) {
          if (typeof previousShippingForm[inputIdentifier] === "object") {
            updatedForm[inputIdentifier] = {
              ...previousShippingForm[inputIdentifier],
              valid: false,
            };
          }
        }
        return updatedForm;
      });
    }
  }, [
    shippingForm.formIsValid,
    shippingType,
    setShippingForm,
    handleTabChange,
  ]);

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
          value={shippingType}
          onChange={handleShippingType}
        >
          <FormControlLabel
            value="pickup"
            control={<RadioButton />}
            label={t("Checkout.Pickup")}
          />
          <FormControlLabel
            value="delivery"
            control={<RadioButton />}
            label={t("Checkout.Delivery")}
          />
        </RadioGroup>
       
      </FormControl>

      {renderShippingType}
       
        {!shippingType && errorVisible &&
          <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body1" style={{color: "red"}}>
                  {t("Checkout.SelectDeliveryType")}
                </Typography>
              </Grid>
          </Grid>} 
       
      <Grid container justifyContent="center">
        <Grid
          item
          style={{
            marginTop: "1em",
            borderRadius: "1em",
            width: "50%",
            padding: ".1em 0px",
            background: "rgba(0, 134, 179, 1)",
          }}>
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
            {t("Checkout.Next")}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
