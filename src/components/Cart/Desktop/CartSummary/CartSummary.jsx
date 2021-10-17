import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../../../pages/CartPage";
import { CircularProgress } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "6.4rem",
  },
  title: {
    fontSize: 14,
  },
  buttonWrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: blue[600],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -14,
    marginLeft: -12,
  },
}));

const CartSummary = ({ totalCartItems, totalCartAmount }) => {
  const { orderValidation, placeOrderLoading } = useContext(CartContext);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card className={classes.root} elevation={15}>
        <CardContent>
          <Typography variant="h6" component="div">
            {t("Cart.CartSummary")}
          </Typography>
          <Typography variant="subtitle2">
            <hr />
          </Typography>
          <Grid container>
            <Grid item md={6} lg={6}>
              <Typography variant="subtitle1" component="div">
                {t("Cart.Items")}
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
                {t("Cart.TotalPrice")}
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
                {`${t("Cart.Kwd")} ${totalCartAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                })}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container>
            <Grid item md={12} lg={12} style={{ textAlign: "center" }}>
              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "6px", width: "20em" }}
                  onClick={orderValidation.bind(null)}
                  disabled={placeOrderLoading}
                >
                  {t("Cart.PlaceOrder")}
                </Button>

                {placeOrderLoading && (
                  <CircularProgress
                    size={28}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartSummary;
