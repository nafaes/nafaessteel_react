import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Shipping_Charges = 0.07;

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
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function totalQuantity(items) {
  return items.map(({ qty }) => qty).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const totalQty = totalQuantity(rows);
const invoiceTaxes = Shipping_Charges * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const CheckoutSummary = () => {
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
                Unit
              </TableCell>
              <TableCell align="right" style={{ top: 57 }}>
                Sum
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell>Total Quantity</TableCell>
              <TableCell align="right">{totalQty}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shipping Charges</TableCell>
              <TableCell align="right">{`${(Shipping_Charges * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CheckoutSummary;
