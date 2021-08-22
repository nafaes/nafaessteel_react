import React from "react";
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

import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const ProductSummary = (props) => {
  const { itemSummary } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  return (
    <Grid container justifyContent="center" style={{ marginTop: "2em" }}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="spanning table"
          size="small"
        >
          <TableHead
            className={clsx(
              classes.addCartTabHdrRow,
              classesExternal.addCartTabHdrRow
            )}
          >
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{itemSummary.itemName}</TableCell>
              <TableCell align="right">{itemSummary.quantity}</TableCell>
              <TableCell align="right">
                {ccyFormat(itemSummary.price)}
              </TableCell>
              <TableCell align="right">
                <Button>
                  <DeleteForeverIcon
                    style={{ fontSize: "2rem", color: "#d9534f" }}
                  />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ProductSummary;
