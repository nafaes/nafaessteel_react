import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ButtonGroup, FormHelperText } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useTranslation } from "react-i18next";

import { limitMaxlength } from "../../utils/validations";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";

const AddToCartForm = (props) => {
  const { item, addToCartForm, formChangeHandler, addToCartHandler } = props;
  const { t } = useTranslation();
  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  return (
    <Grid item container direction="row" justifyContent="center" style={{ color: "#fff"}}>
       <Grid container item xs={12} justifyContent="center" style={{marginBottom:"10px",minHeight:"2.3em",textAlign:"center"}}>
           {addToCartForm.price && (
             <Grid item lg={5} md={5} sm={5} xs={5}>
                <ButtonGroup variant="outlined" size="small" disabled aria-label="outlined secondary button group" >
                  <Button>{`${t("AddToCart.Price")}`}:</Button>
                  <Button>{`${addToCartForm.price}`}</Button>
                </ButtonGroup>
             </Grid>
          )}
           {addToCartForm.unit && (
             <Grid item lg={5} md={5} sm={5} xs={5}>
                <ButtonGroup variant="outlined" size="small" disabled aria-label="outlined secondary button group">
                  <Button>{`${t("AddToCart.Unit")}`}:</Button>
                  <Button>{`${addToCartForm.unit}`}</Button>
                </ButtonGroup>
             </Grid>
          )}
        </Grid>
      <Grid item lg={8} md={8} xs={10}>        
        {item?.selections &&
          item.selections.map((select, index) => (
            <FormControl variant="standard" autoComplete="off" style={{ width: "100%", marginBottom: "0.5em" }}
              key={index}>
              <InputLabel id="dynamic-select" style={{ color: "#fff" }}>
                {select.name}
              </InputLabel>
              <Select
                id="dynamic-select"
                name={select.name}
                value={
                  addToCartForm?.[select.name]?.["value"]
                    ? addToCartForm[select.name]["value"]
                    : ""}
                onChange={({ target }) => {
                  formChangeHandler({
                    target,
                    ...(addToCartForm?.[select.name]?.["value"]
                      ? addToCartForm?.[select.name]
                      : select.types.find(
                          ({ itemId }) => itemId === target.value
                        )),
                  });
                }}
                label={select.name}
                style={{ color: "#fff" }}
                className={clsx(
                  classes.selectCls,
                  classesExternal.selectCls
                )}
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">
                  <em>{t("AddToCart.None")}</em>
                </MenuItem>
                {select.types.map(({ item, itemId }) => (
                  <MenuItem value={itemId} key={itemId}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {!addToCartForm[select.name]?.valid &&
              addToCartForm[select.name]?.touched ? (
                <FormHelperText id="dynamic-select" style={{color:"rgba(255,0,0,1)"}}>
                  {addToCartForm[select.name].validationMsg}
                </FormHelperText>
              ) : null}
            </FormControl>
          ))}
        <TextField
          label={t("AddToCart.InputFields.Quantity")}
          name="quantity"
          value={addToCartForm.quantity.value}
          onChange={formChangeHandler}
          variant="standard"
          className={clsx(
            classes.selectComponentCls,
            classesExternal.selectComponentCls
          )}
          type="number"
          autoComplete="off"
          onKeyPress={(event) => {
            limitMaxlength(event, 2);
          }}
           helperText={
            !addToCartForm.quantity.valid && addToCartForm.quantity.touched
              ? t(addToCartForm.quantity.validationMsg)
              : null
          }
          style={{ width: "100%", marginBottom: "1.5em" }}
        />

        <Grid item container direction="row" justifyContent="center"
          style={{ color: "#fff"}}>
          <Grid item lg={10} md={10} xs={10}>
            <Grid item container
              className={clsx(
                classes.addCartSubBtnContainer,
                classesExternal.addCartSubBtnContainer
              )}
              justifyContent="center">
              <Grid item lg={10} md={10} xs={10}>
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
                  // style={{ fontSize: ".95rem" }}
                  startIcon={
                    <AddShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                  }
                >
                  {t("AddToCart.AddToCart")}
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
