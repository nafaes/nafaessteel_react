import React, { useCallback, useContext, useEffect, useState } from "react";
import { Divider, FormHelperText, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import { CheckoutContext } from "../../../pages/CheckoutPage";
import { getDeliveryAreas } from "../../../services/checkout";

const Delivery = ({ deliveryDate }) => {
  const [deliveryAreas, setDeliveryAreas] = useState([]);
  const { shippingForm, setShippingForm, setShippingCharges } = useContext(CheckoutContext);
  const classes = checkoutStyles();

  const getAreas = useCallback(async () => {
    const areas = await getDeliveryAreas();
    setDeliveryAreas(areas);
  }, []);

  useEffect(() => {
    getAreas();

    return () => {
      setDeliveryAreas([]);
    };
  }, [getAreas]);

  const formChangeHandler = ({ target: { value, name } }) => {
    let updatedForm = {
      ...shippingForm,
      [name]: {
        ...shippingForm[name],
        value: value,
      },
    };

    if (name === "area") {
      if (value) {
        const { price } = deliveryAreas.find(
          ({ charagesId }) => charagesId === value
        );
        updatedForm["shippingCharges"].value = price;
        setShippingCharges(Number(price));
      } else {
        updatedForm["shippingCharges"].value = "";
        setShippingCharges(0);
      }
    }

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      if (typeof updatedForm[inputIdentifier] === "object") {
        formIsValid = updatedForm[inputIdentifier].value !== "" && formIsValid;
      }
    }
    // console.log(updatedForm);
    setShippingForm({ ...updatedForm, formIsValid });
  };

  return (
    <Grid container justifyContent="center">
      <div elevation={12} style={{ width: "96%", margin: "0em auto" }}>
        <Grid item container>
          <Grid item sm={6}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
              error={!shippingForm.area.valid && shippingForm.area.value === ""}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Area
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="area"
                value={shippingForm.area.value ? shippingForm.area.value : ""}
                onChange={formChangeHandler}
                label="Area"
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">
                  <em>Choose Area</em>
                </MenuItem>

                {deliveryAreas.map(({ charagesId, cityName }) => (
                  <MenuItem value={charagesId} key={charagesId}>
                    {cityName}
                  </MenuItem>
                ))}
              </Select>

              {!shippingForm.area.valid && shippingForm.area.value === "" ? (
                <FormHelperText
                  error={
                    !shippingForm.area.valid && shippingForm.area.value === ""
                  }
                >
                  {shippingForm.area.validationMsg}
                </FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-read-only-input"
              label="Shipping Charges"
              value={
                shippingForm.shippingCharges.value
                  ? shippingForm.shippingCharges.value
                  : ""
              }
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Block"
              variant="outlined"
              name="block"
              value={shippingForm.block.value ? shippingForm.block.value : ""}
              onChange={formChangeHandler}
              error={
                !shippingForm.block.valid && shippingForm.block.value === ""
              }
              helperText={
                !shippingForm.block.valid && shippingForm.block.value === ""
                  ? shippingForm.block.validationMsg
                  : null
              }
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Street/Avenue"
              variant="outlined"
              name="street"
              value={shippingForm.street.value ? shippingForm.street.value : ""}
              onChange={formChangeHandler}
              error={
                !shippingForm.street.valid && shippingForm.street.value === ""
              }
              helperText={
                !shippingForm.street.valid && shippingForm.street.value === ""
                  ? shippingForm.street.validationMsg
                  : null
              }
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Plot"
              variant="outlined"
              name="plot"
              value={shippingForm.plot.value ? shippingForm.plot.value : ""}
              onChange={formChangeHandler}
              error={!shippingForm.plot.valid && shippingForm.plot.value === ""}
              helperText={
                !shippingForm.plot.valid && shippingForm.plot.value === ""
                  ? shippingForm.plot.validationMsg
                  : null
              }
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Grid
            container
            justifyContent="center"
            spacing={1}
            style={{
              border: "1px solid #0086b3",
              width: "50%",
              margin: "1.5em auto 0em auto",
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
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Delivery Date:
            </Grid>
            <Divider style={{ width: "80%", backgroundColor: "#0086b3" }} />
            <Grid
              item
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {deliveryDate}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Delivery;
