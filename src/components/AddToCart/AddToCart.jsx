import React, { Fragment } from "react";
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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

import { isInputNumber } from "../../utils/validations";
import addTocartEngDesk from "../../assets/scss/addToCart.module.scss";
import { addToCartMobEng } from "../../assets/jss/viewStyles/addToCart/english";
import brickImg from "../../assets/img/cement.jpg";

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
  const {
    categoryName,
    item,
    addToCartForm,
    formChangeHandler,
    historyItems,
    breadcrumbNavigation,
  } = props;

  const englishMobileStyles = addToCartMobEng();
  let classesExternal = addTocartEngDesk;
  let classes = englishMobileStyles;

  return (
    <Fragment>
      <div
        className={clsx(classes.ContainerForm, classesExternal.ContainerForm)}
      >
        <Grid container justifyContent="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid item container>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt=""
                  src={brickImg}
                  style={{ width: "100%", borderRadius: ".75em" }}
                />
              </Grid>

              <Grid item lg={7} md={7} sm={7} xs={12}>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  style={{
                    color: "#fff",
                    background: "rgba(0, 134, 179, 0.8)",
                    padding: ".6em",
                    borderRadius: "1em",
                    width: "80%",
                    margin: "0px auto",
                  }}
                >
                  <Grid item style={{ color: "#fff" }}>
                    <Breadcrumbs
                      separator={<NavigateNextIcon fontSize="small" />}
                      aria-label="breadcrumb"
                      style={{ color: "#fff" }}
                    >
                      <Link color="inherit" component={RouterLink} to="/">
                        All Categories
                      </Link>
                      {historyItems ? (
                        historyItems.map((item, index) => {
                          const last = index === historyItems.length - 1;

                          if (last) {
                            return (
                              <Typography key={item.itemId} variant="h6">
                                {item.name}
                              </Typography>
                            );
                          } else {
                            return (
                              <Link
                                color="inherit"
                                key={item.itemId}
                                onClick={breadcrumbNavigation.bind(
                                  null,
                                  item.itemId,
                                  item.name
                                )}
                              >
                                {item.name}
                              </Link>
                            );
                          }
                        })
                      ) : (
                        <Grid item>
                          <Typography variant="h6">{categoryName}</Typography>
                        </Grid>
                      )}
                    </Breadcrumbs>
                  </Grid>
                </Grid>

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
                          <InputLabel
                            id="select-type"
                            style={{ color: "#fff" }}
                          >
                            {select.label}
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
                                ...select.types.find(
                                  ({ id }) => id === target.value
                                ),
                              });
                            }}
                            label={select.label}
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
                            {select.types.map(({ type, id }) => (
                              <MenuItem value={id} key={id}>
                                {type}
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
                              className={clsx(
                                classes.addCartSubBtn,
                                classesExternal.addCartSubBtn
                              )}
                              fullWidth
                              margin="dense"
                              style={{ fontSize: ".95rem" }}
                              startIcon={
                                <AddShoppingCartIcon
                                  style={{ fontSize: "1.5rem" }}
                                />
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>

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
      </div>
    </Fragment>
  );
};

export default React.memo(AddToCart);
