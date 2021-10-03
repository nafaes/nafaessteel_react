import React from "react";
import { useParams } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

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
    color: "#ff0000",
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

const PaymentFailed = () => {
  const { status, paymentId, referenceNo, amount } = useParams();
  const { t } = useTranslation();
  const classes = useStyles();

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
            title={t("PaymentFailed.PaymentDetails")}
            // subheader="subheader"
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentFailed.Status")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {status}
              </Typography>
            </div>
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
                {t("PaymentFailed.ReferenceNumber")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {referenceNo}
              </Typography>
            </div>
            <div className={classes.cardPricing}>
              <Typography component="h4" variant="h6" color="textPrimary">
                {t("PaymentFailed.Amount")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {amount}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentFailed;
