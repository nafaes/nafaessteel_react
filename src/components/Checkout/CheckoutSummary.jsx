import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../../context/Provider";
import { CheckoutContext } from "../../pages/CheckoutPage";

const useStyles = makeStyles({
  // root: {
  //   position: "sticky",
  //   top: "6.4rem",
  // },
  // tableRow: {
  //   "&$selected, &$selected:hover": {
  //     backgroundColor: "green",
  //   },
  // },
  root: {
    "& .MuiTableCell-head": {
        backgroundColor: "#f5f5f5"
    },
  }
});


function ccyFormat(num) {
  return `${num.toFixed(3)}`;
}

const CheckoutSummary = () => {
  const {
    cartState: { items: cartItems, totalItems, totalAmount },
  } = useContext(GlobalContext);
  const { shippingCharges } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={5} lg={5} style={{ margin: "1.2em auto auto auto" }}>
      <TableContainer
        component={Paper}
        style={{ height: "30em", overflowY: "auto", clear: "both" }}
      >
        <Table
          className={classes.table}
          aria-label="spanning table"
          stickyHeader>
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell
                align="center"
                colSpan={4}
                style={{ fontWeight: "600"}}
              >
                {/* <Typography variant="h5">Order Summary</Typography> */}
                {t("Cart.OrderSummary")}
              </TableCell>
            </TableRow>
            <TableRow className={classes.root} >
              <TableCell style={{ top: 57 }}>{t("Cart.Items")}</TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                {t("Checkout.Qty")}
              </TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                {t("Cart.Price")}
              </TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                {t("Checkout.Sum")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(
              ({ itemId, itemName, quantity, price, selectedValues }) => (
                <TableRow key={itemId}>
                  <TableCell>
                    {itemName}

                    {selectedValues.map(({ name, item }, index) => (
                      <Fragment key={index}>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          color="textSecondary"
                          className={classes.textContainer}
                        >
                          {item}
                          {/* {`(${item})`} */}
                        </Typography>
                      </Fragment>
                    ))}
                  </TableCell>
                  <TableCell align="right">{quantity}</TableCell>
                  <TableCell align="right">{ccyFormat(price)}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(quantity * price)}
                  </TableCell>
                </TableRow>
              )
            )}

            <TableRow>
              <TableCell>{t("Checkout.TotalQuantity")}</TableCell>
              <TableCell align="right">{totalItems}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell style={{backgroundColor:"#f5f5f5"}} colSpan={2}>{t("Cart.Subtotal")}</TableCell>
              <TableCell style={{backgroundColor:"#f5f5f5"}} align="right">{ccyFormat(totalAmount)}</TableCell>
            </TableRow>
            <TableRow style={{backgroundColor:"#f5f5f5"}}>
              <TableCell>{t("Checkout.ShippingCharges")}</TableCell>
              <TableCell align="right" colSpan={2}>
                {ccyFormat(shippingCharges)}
              </TableCell>
            </TableRow>
            <TableRow style={{backgroundColor:"#f5f5f5"}}>
              <TableCell colSpan={2}>{t("Checkout.Total")}</TableCell>
              <TableCell align="right">
                {ccyFormat(totalAmount + shippingCharges)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CheckoutSummary;