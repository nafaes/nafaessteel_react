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
import { ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";

import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { GlobalContext } from "../../context/Provider";
import { addItem, removeItem } from "../../context/actions/cartActions";
import { CART } from "../../constants/routes";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const ProductSummary = (props) => {
  const { itemSummary } = props;
  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  const { cartItems, dispatchCartActions } = useContext(GlobalContext);

  let items;
  if (cartItems) {
    items = cartItems.filter(
      ({ categoryId }) => categoryId === itemSummary.itemId
    );
  }

  return items ? (
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
            )} >
            <TableRow>
              <TableCell>Item</TableCell>
              {itemSummary.selectedValues.map((selectedValue, index) => (
                <TableCell key={index} align="center">
                  {selectedValue.name}
                </TableCell>
              ))}
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((cartItem, index) => (
              <TableRow key={index}>
                <TableCell>{cartItem.itemName}</TableCell>
                {cartItem.selectedValues.map((selectedValue, index) => (
                  <TableCell key={index} align="center">
                    {selectedValue.item}
                  </TableCell>
                ))}
                <TableCell align="center">
                  {ccyFormat(cartItem.price)}
                </TableCell>

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
                    <Button>{cartItem.quantity}</Button>
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
                <TableCell align="right">
                  <Button
                    onClick={dispatchCartActions.bind(
                      null,
                      removeItem(cartItem.itemId, 0)
                    )}
                  >
                    <DeleteForeverIcon
                      style={{ fontSize: "2rem", color: "#d9534f" }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            <TableRow
              className={clsx(
                classes.addCartTabFtrRow,
                classesExternal.addCartTabFtrRow
              )}
            >
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Button
                  component={Link}
                  to={CART}
                  variant="contained"
                  // color="primary"
                  // style={{ margin: "6px", width: "20em" }}
                >
                  Go to Cart
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  ) : null;
};

export default ProductSummary;
