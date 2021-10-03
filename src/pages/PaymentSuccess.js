import React, { useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../context/Provider";
import { clearCart } from "../context/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "#fff",
    borderRadius: "20px",
    height: "100%",
    minHeight: "100vh",
    // width: "100%",
    width: "60%",
    maxWidth: "calc(100% + 16px)",
    margin: "3rem auto 0 auto",
    paddingTop: "20px",
  },
  title: {
    color: "#009933",
  },

  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const PaymentSuccess = () => {
  const { paymentId, orderId, oderDate, trackId, paymentType } = useParams();
  const { dispatchCartActions } = useContext(GlobalContext);
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    localStorage.removeItem("cart");
    dispatchCartActions(clearCart());
  }, [dispatchCartActions]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item>
        <Card>
          <CardHeader
            title="Order Success"
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentFailed.PaymentId")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {paymentId}
              </Typography>
            </div>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentSuccess.OrderId")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {orderId}
              </Typography>
            </div>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentSuccess.OderDate")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {oderDate}
              </Typography>
            </div>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentSuccess.PaymentType")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {trackId}
              </Typography>
            </div>
            {paymentType !== "NOTAPPLICABLE" ? (
              <div className={classes.cardPricing}>
                <Typography component="h4" variant="h6" color="textPrimary">
                  {t("PaymentSuccess.TrackId")}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {paymentType}
                </Typography>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentSuccess;
