import React from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const cartItems = [
  {
    itemId: "item1",
    itemName: "Kuwaiti Steel",
    quantity: "8 mm",
    image: "https://www.nafaessteel.com/IronImages/kwt_steel.png",
    cost: "247.000 KWD Per Ton.",
    amount: 494.0,
  },
  {
    itemId: "item2",
    itemName: "Kuwaiti Steel",
    quantity: "25 mm",
    image: "https://www.nafaessteel.com/IronImages/oman_steel.png",
    cost: "240.000 KWD Per Ton.",
    amount: 988.0,
  },
  {
    itemId: "item3",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71XO3ndJMGS._AC_UL320_.jpg",
    cost: "299.000 KWD Per 10 Pieces.",
    amount: 299.0,
  },
  {
    itemId: "item5",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71i+z+eHk1S._AC_UL320_.jpg",
    cost: "250.000 KWD Per 10 Pieces.",
    amount: 250.0,
  },

  {
    itemId: "item6",
    itemName: "Kuwaiti Steel",
    quantity: "8 mm",
    image: "https://www.nafaessteel.com/IronImages/kwt_steel.png",
    cost: "247.000 KWD Per Ton.",
    amount: 494.0,
  },
  {
    itemId: "item7",
    itemName: "Kuwaiti Steel",
    quantity: "25 mm",
    image: "https://www.nafaessteel.com/IronImages/oman_steel.png",
    cost: "240.000 KWD Per Ton.",
    amount: 988.0,
  },
  {
    itemId: "item8",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71XO3ndJMGS._AC_UL320_.jpg",
    cost: "299.000 KWD Per 10 Pieces.",
    amount: 299.0,
  },
  {
    itemId: "item4",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71i+z+eHk1S._AC_UL320_.jpg",
    cost: "250.000 KWD Per 10 Pieces.",
    amount: 250.0,
  },
];

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

const CartItems = () => {
  const classes = useStyles();

  const cartTotal = cartItems.reduce((total, { amount }) => {
    return total + amount;
  }, 0);

  return (
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
            <Grid item xs={7} sm={8}>
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
                {item.cost}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap={true}
                style={{ fontWeight: "bold" }}
              >
                {item.amount.toFixed(3)}
              </Typography>
              <Typography variant="body2" style={{ cursor: "pointer" }}>
                Remove
              </Typography>
            </Grid>

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
                //   className={classes.img}
                width={100}
                height={100}
                alt={item.itemName}
                src={item.image}
              />
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      ))}

      <Grid item container className={classes.stickyBottom} alignItems="center">
        <Grid item xs={6} sm={4}>
          <Typography variant="subtitle1" component="div">
            {`Subtotal (${cartItems.length} items):`}
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
            {`KWD ${cartTotal.toFixed(3)}`}
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
  );
};

export default CartItems;
