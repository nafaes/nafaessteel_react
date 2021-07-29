import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import { Typography } from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function totalqty(quantity) {
  return quantity.map(({ qty }) => qty).reduce((sum, i) => sum + i, 0);
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
const totalQuantity = totalqty(rows);

const AddToCart = (props) => {
  // const {
  //   categoryName,
  //   item,
  //   type,
  //   typeChangeHandler,
  //   sizes,
  //   size,
  //   sizeChangeHandler,
  //   length,
  //   lengthHandler,
  //   price,
  // } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Fragment>
      <form
        className={clsx(classes.ContainerForm, classesExternal.ContainerForm)}
      >
        <Grid container justify="center">
          <Grid item lg={8} md={8} xs={12}>
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              style={{
                color: "#fff",
                background: "rgba(0, 134, 179, 0.8)",
                padding: ".6em",
                borderRadius: "1em",
              }}
            >
              <Grid item>
                <Typography variant="h6">Kuwait Steel</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">247.00 Per Ton</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              justify="center"
              style={{ color: "#fff", marginTop: "1em" }}
            >
              <Grid item lg={8} md={8} xs={10}>
                <FormControl
                  variant="outlined"
                  autoComplete="off"
                  style={{ width: "100%", marginBottom: "2em" }}
                >
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ color: "#fff" }}
                  >
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={size}
                    onChange={handleChange}
                    label="Size"
                    style={{ color: "#fff" }}
                    className={clsx(
                      classes.selectComponentCls,
                      classesExternal.selectComponentCls
                    )}
                    MenuProps={{ disableScrollLock: true }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10 mm</MenuItem>
                    <MenuItem value={20}>20 mm</MenuItem>
                    <MenuItem value={30}>30 mm</MenuItem>
                  </Select>
                </FormControl>

                {/* <form style={{ width: "100%", marginBottom: "2em" }} autoComplete="off"> */}
                <TextField
                  id="outlined-basic"
                  label="Enter Quantity"
                  variant="outlined"
                  className={clsx(
                    classes.selectComponentCls,
                    classesExternal.selectComponentCls
                  )}
                  autoComplete="off"
                  style={{ width: "100%", marginBottom: "2em" }}
                />
                {/* </form> */}

                <Grid
                  item
                  container
                  className={clsx(
                    classes.addCartSubBtnContainer,
                    classesExternal.addCartSubBtnContainer
                  )}
                  justify="center"
                >
                  <Grid item lg={8} md={8} xs={8}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="small"
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

        <Grid container justify="center" style={{ marginTop: "2em" }}>
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
                {/* <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Sum</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                    <TableCell align="right">
                      <Button>
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
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">{totalQuantity}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </form>
    </Fragment>
  );
};

export default AddToCart;
