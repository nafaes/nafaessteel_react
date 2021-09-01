import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { addItem, removeItem } from "../../../../context/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    // flexGrow: 1,
  },
  itemContainer: {
    paddingTop: 12,
    marginBottom: 12,
  },
  itemText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  textContainer: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "56%",
  },
  image: {
    width: 110,
    height: 110,
    // marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const DesktopCartItems = (props) => {
  const { cartItems, totalCartItems, totalCartAmount, dispatchCartActions } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Paper className={classes.paper}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Items in your cart
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              Price
            </Typography>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />

        {cartItems.map((item, index) => (
          <Fragment key={item.itemId}>
            <Grid
              container
              justifyContent="flex-start"
              className={classes.itemContainer}
            >
              <Grid item xs={4} sm={4} md={3} lg={4} className={classes.image}>
                <img
                  className={classes.img}
                  alt={item.itemName}
                  src={
                    require(`../../../../assets/img/${item.itemImage}`).default
                  }
                />
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} container>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  spacing={2}
                  className={classes.itemText}
                >
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      className={classes.textContainer}
                    >
                      {item.itemName}
                    </Typography>
                    {item.selectedValues.map(({ name, item }, index) => (
                      <Fragment key={index}>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          color="textSecondary"
                          className={classes.textContainer}
                        >
                          {item}
                        </Typography>
                      </Fragment>
                    ))}

                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        onClick={dispatchCartActions.bind(
                          null,
                          removeItem(item.itemId, 1)
                        )}
                      >
                        -
                      </Button>
                      <Button>{item.quantity}</Button>
                      <Button
                        onClick={dispatchCartActions.bind(
                          null,
                          addItem({ itemId: item.itemId, quantity: 1 })
                        )}
                      >
                        +
                      </Button>
                    </ButtonGroup>

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
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.price.toFixed(3)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
          </Fragment>
        ))}

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {`Subtotal (${totalCartItems} items):`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{
              fontWeight: "bold",
            }}
          >
            {`KWD ${totalCartAmount.toLocaleString(undefined, {
              minimumFractionDigits: 3,
            })}`}
            {/* {`KWD ${totalCartAmount.toFixed(3)}`} */}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DesktopCartItems;
