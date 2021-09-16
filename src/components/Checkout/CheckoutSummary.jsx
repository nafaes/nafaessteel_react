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

import { GlobalContext } from "../../context/Provider";
import { CheckoutContext } from "../../pages/CheckoutPage";

const useStyles = makeStyles({
  // root: {
  //   position: "sticky",
  //   top: "6.4rem",
  // },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "green",
    },
  },
});

// const TableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: "#f2f2f2",
//       },
//     },
//   }))(TableRow);

function ccyFormat(num) {
  return `${num.toFixed(3)}`;
}

const CheckoutSummary = () => {
  const { cartItems, totalCartItems, totalCartAmount } = useContext(GlobalContext);
  const { shippingCharges } = useContext(CheckoutContext);
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={5} lg={5} style={{ marginTop: "1.2em" }}>
      <TableContainer
        component={Paper}
        style={{ height: "32em", overflowY: "auto", clear: "both" }}
      >
        <Table
          className={classes.table}
          aria-label="spanning table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={4}
                style={{ fontWeight: "600" }}
              >
                {/* <Typography variant="h5">Order Summary</Typography> */}
                Order Details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ top: 57 }}>Items</TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                Qty.
              </TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                Price
              </TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                Sum
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
              <TableCell>Total Quantity</TableCell>
              <TableCell align="right">{totalCartItems}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(totalCartAmount)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shipping Charges</TableCell>
              {/* <TableCell align="right">{`${(Shipping_Charges * 100).toFixed(
                0
              )} %`}</TableCell> */}
              <TableCell align="right" colSpan={2}>
                {ccyFormat(shippingCharges)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {ccyFormat(totalCartAmount + shippingCharges)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CheckoutSummary;
