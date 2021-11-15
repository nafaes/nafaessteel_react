import React, { Fragment, useCallback, useState } from "react";
import { Button, Chip, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import OrderDetails from "./OrderDetails";
import TrackOrder from "./TrackOrder";

import EmptyOrders from "./EmptyOrders";
import LoaderImg from "../LoaderImg";
import { useTranslation } from "react-i18next";


// const imageList = ["iron", "wood", "bricks", "cement"];

const useStyles = makeStyles((theme) => ({
  textHeader: {
    fontSize: "0.95em",
    fontWeight: "600",
  },
  mainHeader: {
    fontWeight: "100",
    fontSize: "1.25em",
    padding: "0.5em 1em ",
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "96%",
    margin: "1em 3em",
  },
  border: {
    borderBottom: "2px dotted #0086b3",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: "1.25em",
    color: "black",
    width: "26%",
    margin: "auto",
    textAlign: "center",
  },
}));

const Orders = (props) => {
  const { t } = useTranslation();

  const { orders, getOrderDetails, orderDetails, downloadPdf ,loading } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [openTrackOrder, setOpenTrackOrder] = useState(false);
  const [activeState,setActiveState] = useState(0);

  const handleClickOpen = (orderId, totalAmount) => {
    setOpenDialog(true);
    getOrderDetails(orderId, totalAmount);
  };
  const handleClickOpenTrack = (orderId,activeStep) => {
    setActiveState(activeStep);
    setOpenTrackOrder(true);
  };
  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);
  const handleCloseTrackOrder = useCallback(() => {
    setOpenTrackOrder(false);
  }, []);

  const classes = useStyles();

  const DividerLine = ({ children }) => {
    return (
      <div className={classes.container}>
        <div className={classes.border} />
        <span className={classes.content}>{children}</span>
        <div className={classes.border} />
      </div>
    );
  };

  let OrdersData ;
// alert(orders.length);
  if (orders.length > 0) {
    OrdersData = (
      <React.Fragment>
        <Grid container direction="row" style={{ marginTop: "3em", backgroundColor: "white" }}>
          <DividerLine>
            <Chip variant="outlined" color="primary" label= {t("Orders.YourOrders")}
              style={{ padding: "0px 25px", fontSize: "0.85em" }} />
          </DividerLine>
          {orders ? orders.map((order, index) => (
            <Grid key={order.exchangeOrderId} item container style={{ margin: "0em auto 1.5em", width: "85%" }}>
              <Grid item container
                style={{
                  backgroundColor: " #e6e6e6",
                  padding: "1em",
                  borderRadius: "0.8em",
                }}>
                <Grid item container direction="row" lg={6}
                  style={{ flexWrap: "nowrap", textAlign: "center" }}>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography variant="h6" className={classes.textHeader}>
                      {t("Orders.OrderPlaced")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        {order.orderDate}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography variant="h6" className={classes.textHeader}>
                      {t("PaymentFailed.Amount")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        {order.amount}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography variant="h6" className={classes.textHeader}>
                      {t("Orders.ShipTo")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        {order.customerName}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <Typography variant="h6" className={classes.textHeader}>
                      {t("Checkout.DeliveryDate")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        {order.deliveryDate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container direction="row" lg={2}
                  style={{ flexWrap: "nowrap" }}>
                </Grid>
                <Grid item container direction="row" lg={4}
                  style={{ flexWrap: "nowrap", textAlign: "center" }}>
                  <Grid item container direction="column" justifyContent="center">
                    <Grid item>
                      <Button variant="text" onClick={handleClickOpen.bind(null,
                        order.exchangeOrderId,
                        order.amount
                      )}
                        style={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "0.93em",
                          backgroundColor: "#0086b3",
                          color: "white",
                        }}>
                         {t("Orders.ViewOrder")}
                      </Button>
                    </Grid>
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid item container direction="column" justifyContent="center">
                    <Grid item>
                      <Button onClick={() => downloadPdf(order.exchangeOrderId)}
                        style={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "0.93em",
                          backgroundColor: "#0086b3",
                          color: "white"
                        }}>
                        {t("Orders.Print")}
                      </Button>
                    </Grid>
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid item container direction="column" justifyContent="center">
                    <Grid item>
                      <Button onClick={handleClickOpenTrack.bind(null,order.exchangeOrderId,order.activeStep)}
                        style={{
                          textTransform: "none",
                          fontWeight: "600",
                          fontSize: "0.93em",
                          backgroundColor: "#0086b3",
                          color: "white",
                        }}>                  
                        {t("Navbar.TrackOrder")}
                      </Button>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))
            : null}
        </Grid>
      </React.Fragment>
    )
  }
  else{
    //  alert("else");
    OrdersData = <EmptyOrders/>
  }



  return (
    <Fragment>
      {loading === true ? <LoaderImg/> : (OrdersData)}
      <OrderDetails
        openDialog={openDialog}
        handleClose={handleClose}
        orderDetails={orderDetails}
      />
      <TrackOrder
        activeState={activeState}
        openTrackOrder={openTrackOrder}
        handleCloseTrackOrder={handleCloseTrackOrder}  
      />
    </Fragment>
  );
};

export default Orders;
