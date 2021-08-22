import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { isInputNumber } from "../../utils/validations";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";

const AddToCartForm = (props) => {
  const { item, addToCartForm, formChangeHandler, addToCartHandler } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      style={{ color: "#fff", marginTop: "1em" }}
    >
      <Grid item lg={8} md={8} xs={10}>
        {item?.selections &&
          item.selections.map((select, index) => (
            <FormControl
              variant="outlined"
              autoComplete="off"
              style={{ width: "100%", marginBottom: "2em" }}
              key={index}
            >
              <InputLabel id="select-type" style={{ color: "#fff" }}>
                {select.name}
              </InputLabel>
              <Select
                labelId="select-type"
                id="select-type-select-outlined"
                name={select.name}
                value={
                  addToCartForm?.[select.name]?.["value"]
                    ? addToCartForm[select.name]["value"]
                    : ""
                }
                onChange={({ target }) => {
                  formChangeHandler({
                    target,
                    ...select.types.find(({ id }) => id === target.value),
                  });
                }}
                label={select.name}
                style={{ color: "#fff" }}
                className={clsx(
                  classes.selectComponentCls,
                  classesExternal.selectComponentCls
                )}
                MenuProps={{ disableScrollLock: false }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {select.types.map(({ item, itemId }) => (
                  <MenuItem value={itemId} key={itemId}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}

        {addToCartForm.price && (
          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <Typography component="h1" variant="subtitle1">
              Price: {addToCartForm.price}
            </Typography>
          </Grid>
        )}

        <TextField
          id="outlined-basic"
          label="Enter Quantity"
          name="quantity"
          value={addToCartForm.quantity.value}
          onChange={formChangeHandler}
          variant="outlined"
          className={clsx(
            classes.selectComponentCls,
            classesExternal.selectComponentCls
          )}
          autoComplete="off"
          onKeyPress={(event) => {
            isInputNumber(event, 2);
          }}
          // error={
          //   !addToCartForm.quantity.valid &&
          //   addToCartForm.quantity.touched
          // }
          helperText={
            !addToCartForm.quantity.valid && addToCartForm.quantity.touched
              ? addToCartForm.quantity.validationMsg
              : null
          }
          style={{ width: "100%", marginBottom: "2em" }}
        />

        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          style={{ color: "#fff", marginTop: "1em" }}
        >
          <Grid item lg={9} md={9} xs={10}>
            <Grid
              item
              container
              className={clsx(
                classes.addCartSubBtnContainer,
                classesExternal.addCartSubBtnContainer
              )}
              justifyContent="center"
            >
              <Grid item lg={8} md={8} xs={8}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  onClick={addToCartHandler.bind(null)}
                  className={clsx(
                    classes.addCartSubBtn,
                    classesExternal.addCartSubBtn
                  )}
                  fullWidth
                  margin="dense"
                  style={{ fontSize: ".95rem" }}
                  startIcon={
                    <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                  }
                >
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddToCartForm;