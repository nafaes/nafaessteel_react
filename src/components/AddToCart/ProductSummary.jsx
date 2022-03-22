import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ButtonGroup, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { GlobalContext } from "../../context/Provider";
import { addItem, removeItem } from "../../context/actions/cartActions";
import { CART } from "../../constants/routes";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const ProductSummary = (props) => {
  const { itemSummary } = props;
  const { t } = useTranslation();
  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  const {
    cartState: { items: cartItems },
    dispatchCartActions,
  } = useContext(GlobalContext);

  let items;
  if (cartItems) {
    items = cartItems.filter(
      ({ categoryId }) => categoryId === itemSummary.itemId
    );
  }
  if (items.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid container justifyContent="center" style={{ marginTop: "2em" }}>
        <Grid item lg={7} md={7} xs={12}>

          <TableContainer component={Paper}>
            <Table
              className={classes.table} size="small" aria-label="a dense table">
              <TableHead
                className={clsx(
                  classes.addCartTabHdrRow,
                  classesExternal.addCartTabHdrRow
                )}

              >
                <TableRow>
                  <TableCell>{t("AddToCart.Item")}</TableCell>
                  {itemSummary.selectedValues.map((selectedValue, index) => (
                    <TableCell key={index} align="center">
                      {selectedValue.name}
                    </TableCell>
                  ))}
                  <TableCell align="center">{t("AddToCart.Quantity")}</TableCell>
                  <TableCell align="center">{t("AddToCart.Price")}</TableCell>
                  <TableCell align="center">{t("Checkout.Total")}</TableCell>
                  <TableCell align="right">{t("AddToCart.Action")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={clsx(classes.addCartTabBdyRow, classesExternal.addCartTabBdyRow
              )} style={{ padding: " 2px 5x !important" }}>
                {items.map((cartItem, index) => (
                  <TableRow key={index} >
                    <TableCell>{cartItem.itemName}</TableCell>
                    {cartItem.selectedValues.map((selectedValue, index) => (
                      <TableCell key={index} align="center">
                        {selectedValue.item}
                      </TableCell>
                    ))}
                    <TableCell align="center">
                      <ButtonGroup

                        variant="contained"
                        color="primary"
                        aria-label="contained primary button group"
                      >
                        <Button
                          onClick={dispatchCartActions.bind(
                            null,
                            removeItem(cartItem.itemId, 1)
                          )}
                        >
                          -
                        </Button>
                        <Button >{cartItem.quantity}</Button>
                        <Button
                          onClick={dispatchCartActions.bind(
                            null,
                            addItem({ itemId: cartItem.itemId, quantity: 1 })
                          )}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="center">
                      {ccyFormat(cartItem.price)}
                    </TableCell>
                    <TableCell align="center">
                      {ccyFormat(cartItem.price * cartItem.quantity)}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={dispatchCartActions.bind(
                          null,
                          removeItem(cartItem.itemId, 0)
                        )}
                      >
                        <DeleteForeverIcon
                          style={{ fontSize: "2rem", color: "#d9534f" }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow className={clsx(classes.addCartTabFtrRow, classesExternal.addCartTabFtrRow)}>
                  <TableCell colSpan={6} align="right">
                    <Button
                      type="submit"
                      component={Link}
                      variant="contained"
                      to={CART}
                      className={clsx(
                        classes.addCartSubBtn,
                        classesExternal.addCartSubBtn
                      )}
                      style={{ fontSize: ".95rem" }}
                      startIcon={<ShoppingCart style={{ fontSize: "1.5rem" }} />}>
                      {t("AddToCart.InputFields.GoToCart")}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProductSummary;
