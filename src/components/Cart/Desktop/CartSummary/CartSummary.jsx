import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

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

const CartSummary = ({ totalCartItems, totalCartAmount }) => {
  const classes = useStyles();

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
                {totalCartItems}
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
                {`KWD ${(totalCartAmount).toLocaleString(undefined, { minimumFractionDigits: 3 })}`}
                {/* {`KWD ${totalCartAmount.toFixed(3)}`} */}
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
