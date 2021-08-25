import React, { Fragment } from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { addItem, removeItem } from "../../../../context/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: "#fff",
    padding: 16,
  },

  stickyBottom: {
    padding: 2,
    position: "sticky",
    bottom: 0,

    backgroundColor: "#F8F8F8",
    borderTop: "1.4px solid #E7E7E7",
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
  },
}));

const CartItems = (props) => {
  const { cartItems, totalCartItems, totalCartAmount, dispatchCartActions } = props;
  const classes = useStyles();

  return (
    cartItems && (
      <Grid container style={{ marginTop: "2em" }}>
        <Grid item xs={12} sm={12} className={classes.headerContent}>
          <Typography variant="h6" gutterBottom>
            Items in your cart
          </Typography>
          <Divider variant="fullWidth" />
        </Grid>

        {cartItems.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            key={item.itemId}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "10px 14px",
              paddingBottom: 10,
            }}
          >
            <Grid container>
              <Grid
                item
                xs={5}
                sm={4}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={100}
                  height={100}
                  alt={item.itemName}
                  src={
                    require(`../../../../assets/img/${item.itemImage}`).default
                  }
                />
              </Grid>

              <Grid container item xs={7} sm={8}>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    noWrap={true}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "inherit",
                    }}
                  >
                    {item.itemName}
                  </Typography>

                  {item.selectedValues.map(({ name, item }, index) => (
                    <Fragment key={index}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        noWrap={true}
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "inherit",
                        }}
                      >
                        {item}
                      </Typography>
                    </Fragment>
                  ))}
                  <Typography
                    variant="subtitle1"
                    noWrap={true}
                    style={{ fontWeight: "bold" }}
                  >
                    {item.price.toFixed(3)}
                  </Typography>
                </Grid>

                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={8}>
                    <ButtonGroup
                      variant="contained"
                      size="small"
                      // color="primary"
                      aria-label="contained primary button group"
                    >
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={dispatchCartActions.bind(
                          null,
                          removeItem(item.itemId, 1)
                        )}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Button>{item.quantity}</Button>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={dispatchCartActions.bind(
                          null,
                          addItem(item.itemId, 1)
                        )}
                      >
                        <AddIcon />
                      </IconButton>
                    </ButtonGroup>
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      onClick={dispatchCartActions.bind(
                        null,
                        removeItem(item.itemId, 0)
                      )}
                    >
                      <DeleteForeverIcon
                        style={{ fontSize: "2rem", color: "#d9534f" }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
          </Grid>
        ))}

        <Grid
          item
          container
          className={classes.stickyBottom}
          alignItems="center"
        >
          <Grid item xs={6} sm={4}>
            <Typography variant="subtitle1" component="div">
              {`Subtotal (${totalCartItems} items):`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography
              variant="subtitle1"
              component="div"
              style={{
                fontWeight: "bold",
              }}
            >
              {`KWD ${totalCartAmount.toLocaleString(undefined, {
                minimumFractionDigits: 3,
              })}`}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              color="primary"
              style={{ marginTop: 10, margin: 10 }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  );
};

export default CartItems;
