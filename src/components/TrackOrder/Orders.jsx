import React, { Fragment, useCallback, useState } from "react";
import { Button, Chip, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import OrderDetails from "./OrderDetails";
import { TRACKORDER } from "../../constants/routes";

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
  const { orders, getOrderDetails, orderDetails, downloadPdf } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = (orderId, totalAmount) => {
    setOpenDialog(true);
    getOrderDetails(orderId, totalAmount);
  };
  const handleClose = useCallback(() => {
    setOpenDialog(false);
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

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        style={{ marginTop: "3em", backgroundColor: "white" }}
      >
        <DividerLine>
          <Chip
            variant="outlined"
            color="primary"
            label="Your Orders"
            style={{ padding: "0px 25px", fontSize: "0.85em" }}
          />
        </DividerLine>

        {orders
          ? orders.map((order, index) => (
              <Grid
                key={order.exchangeOrderId}
                item
                container
                style={{ margin: "1em auto", width: "70%" }}
              >
                <Grid
                  item
                  container
                  style={{
                    backgroundColor: " #e6e6e6",
                    padding: "0.5em",
                    borderTopLeftRadius: "0.8em",
                    borderTopRightRadius: "0.8em",
                  }}
                >
                  <Grid
                    item
                    container
                    direction="row"
                    lg={5}
                    style={{ flexWrap: "nowrap", textAlign: "center" }}
                  >
                    <Grid item container direction="column">
                      <Grid item>
                        <Typography variant="h6" className={classes.textHeader}>
                          ORDER PLACED
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
                          Amount
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
                          SHIP TO
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
                          DELIVERY DATE
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {order.deliveryDate}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    lg={3}
                    style={{ flexWrap: "nowrap" }}
                  ></Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    lg={4}
                    style={{ flexWrap: "nowrap", textAlign: "center" }}
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Button
                          variant="text"
                          style={{
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "0.93em",
                            backgroundColor: "#0086b3",
                            color: "white",
                          }}
                          onClick={handleClickOpen.bind(
                            null,
                            order.exchangeOrderId,
                            order.amount
                          )}
                        >
                          View Order
                        </Button>
                      </Grid>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid
                      item
                      container
                      direction="column"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Button
                          onClick={() => downloadPdf(order.exchangeOrderId)}
                          style={{
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: "0.93em",
                            backgroundColor: "#0086b3",
                            color: "white",
                          }}
                        >
                          Print
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  style={{
                    border: " 1px solid #cccccc",
                    borderBottomLeftRadius: "0.8em",
                    borderBottomRightRadius: "0.8em",
                  }}
                >
                  <Grid
                    item
                    container
                    lg={6}
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ padding: "0.5em" }}
                  >
                    {/* <Grid item>
                      <img
                        alt="productImg"
                        src={
                          require("../../assets/img/" + imageList[0] + ".jpg")
                            .default
                        }
                        style={{
                          borderRadius: "50%",
                          width: "5em",
                          height: "5em",
                          border: "1px solid #cccccc",
                        }}
                      ></img>
                    </Grid> */}
                    {/* <Grid item style={{ padding: "1em" }}>
                  <Typography variant="subtitle1">
                    {orderItem.itemName}
                  </Typography>
                </Grid> */}
                  </Grid>
                  <Grid
                    item
                    container
                    lg={6}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    style={{ padding: "2em" }}
                  >
                    <Grid item>
                      <Button
                        style={{
                          backgroundColor: "#0086b3",
                          color: "white",
                          fontSize: "1.05em",
                          padding: "0.2em 2em",
                          textTransform: "none",
                        }}
                        component={Link}
                        to={TRACKORDER}
                        target="_blank"
                      >
                        Track Order
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))
          : null}
      </Grid>

      <OrderDetails
        openDialog={openDialog}
        handleClose={handleClose}
        orderDetails={orderDetails}
      />
    </Fragment>
  );
};

export default Orders;
