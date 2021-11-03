import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

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
        id="alert-dialog-title"
        style={{ backgroundColor: "#cccccc", padding: "0.5em",margin: "1px" }}
      >
        <Grid item container direction="row" style={{ textAlign: "center" }}>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>ITEM</Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>QUANTITY</Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>PRICE</Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h6" className={classes.textHeader}>TOTAL</Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent style={{padding: "2px 1px"}}>
        {orderDetails.allOrders
          ? orderDetails.allOrders.map((order) => (
              <Grid key={order.itemName} container direction="row"
                style={{
                  textAlign: "center",
                  padding: "0.5em",
                  color: "initial",
                }}>
                <Grid item lg={3}>
                  <Typography variant="subtitle2"> {order.itemName}</Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">{ccyFormat(order.quantity)}</Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">{ccyFormat(order.unitPrice)}</Typography>
                </Grid>
                <Grid item lg={3}>
                  <Typography variant="subtitle2">{ccyFormat(order.unitPrice)}</Typography>
                </Grid>
              </Grid>
            ))
          : null}

        <Grid container direction="row"
          style={{ color: "white", borderRadius: "5px", textAlign: "center" }}>
          <Grid item container
            style={{
              backgroundColor: "rgba(0, 134, 179,.7)",
              padding: "0.5em",
            }}>
            <Grid item lg={6}>
              <Typography variant="subtitle2">Cart Items</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2">
                {orderDetails?.allOrders?.length}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container
            style={{
              backgroundColor: "rgba(0, 134, 179,.8)",
              padding: "0.5em"}}>
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
          <Grid item container
            style={{ backgroundColor: "rgb(0, 134, 179)", padding: "0.5em" }}>
            <Grid item lg={6}>
              <Typography variant="subtitle2">Total Amount</Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2">
                KWD{" "}
                {ccyFormat(Number(orderDetails.allOrders[0]?.shippingAmount) +
                  Number(orderDetails.totalAmount)) }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetails;
