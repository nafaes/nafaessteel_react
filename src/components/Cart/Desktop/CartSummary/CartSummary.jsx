import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
  root: {
    position: "sticky",
    top: "6.4rem",
    // minWidth: "275"
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const CartSummary = () => {
  const classes = useStyles();

  const cartTotal = cartItems.reduce((total, { amount }) => {
    return total + amount;
  }, 0);

  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card className={classes.root} elevation={15}>
        <CardContent>
          <Typography variant="h6" component="div">
            Cart Summary
          </Typography>
          <Typography variant="subtitle2">
            <hr />
          </Typography>
          <Grid container>
            <Grid item md={6} lg={6}>
              <Typography variant="subtitle1" component="div">
                Items
              </Typography>
            </Grid>
            <Grid item md={6} lg={6}>
              <Typography
                variant="subtitle1"
                component="div"
                style={{
                  fontWeight: "bold",
                }}
              >
                {cartItems.length}
              </Typography>
            </Grid>
            <Grid item md={6} lg={6}>
              <Typography variant="subtitle1" component="div">
                {/* {`Subtotal (${cartItems.length} items):`} */}
                Total Price
              </Typography>
            </Grid>
            <Grid item md={6} lg={6}>
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
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container>
            <Grid item sm={11} lg={12}>
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartSummary;
