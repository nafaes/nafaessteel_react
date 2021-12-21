import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  DialogWidth: {
    " & .MuiDialog-paper": {
      width: "50%",
    },
  },
  textHeader: {
    fontSize: "0.75em",
    fontWeight: "600",
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(3)}`;
}

const OrderDetails = (props) => {
  const { openDialog, orderDetails, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableScrollLock={true}
      className={classes.DialogWidth}
    >
      <DialogTitle
        className={classes.DialogHeader}
        id="alert-dialog-title"
        style={{ backgroundColor: "#cccccc", padding: "0.1em" }}
      >
        <Grid item container direction="row" justifyContent="space-between">
          <Grid
            item
            lg={4}
            style={{ padding: "1px 1em", position: "relative", top: "0.3rem" }}
          >
            <Typography variant="h6" className={classes.textHeader}>
              Order Details
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClose} style={{ padding: "0px" }}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent style={{ padding: "0px" }}>
        <Grid
          item
          container
          direction="row"
          style={{
            textAlign: "center",
            backgroundColor: "#f2f2f2",
            padding: "0.3rem",
          }}
        >
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>
              Item
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>
              Quantity
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>
              Price
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>
              Total
            </Typography>
          </Grid>
        </Grid>
        {orderDetails.allOrders
          ? orderDetails.allOrders.map((order) => (
              <Grid
                key={order.itemName}
                container
                direction="row"
                style={{
                  textAlign: "center",
                  padding: "0.5em",
                  color: "initial",
                }}
              >
                <Grid item lg={3}>
                  <Typography variant="subtitle2"> {order.itemName}</Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">
                    {ccyFormat(order.quantity)}
                  </Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">
                    {ccyFormat(order.unitPrice)}
                  </Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">
                    {ccyFormat(order.unitPrice)}
                  </Typography>
                </Grid>
              </Grid>
            ))
          : null}

        <Grid
          container
          direction="row"
          style={{ color: "white", borderRadius: "5px", textAlign: "center" }}
        >
          <Grid
            item
            container
            style={{
              backgroundColor: "rgba(0, 134, 179,.7)",
              padding: "0.5em",
            }}
          >
            <Grid item lg={6}>
              <Typography variant="subtitle2">Cart Items</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2">
                {orderDetails?.allOrders?.length}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{
              backgroundColor: "rgba(0, 134, 179,.8)",
              padding: "0.5em",
            }}
          >
            <Grid item lg={6}>
              <Typography variant="subtitle2">Shipping Charges</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2">
                KWD{" "}
                {orderDetails.allOrders.length > 0
                  ? ccyFormat(orderDetails.allOrders[0]?.shippingAmount)
                  : null}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ backgroundColor: "rgb(0, 134, 179)", padding: "0.5em" }}
          >
            <Grid item lg={6}>
              <Typography variant="subtitle2">Total Amount</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2">
                KWD{" "}
                {ccyFormat(
                  Number(orderDetails.allOrders[0]?.shippingAmount) +
                    Number(orderDetails.totalAmount)
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetails;
