import { Button, Chip, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { allOrderItems } from "../../constants/data";
import { TRACKORDER } from "../../constants/routes";
import { Link } from "react-router-dom";

const imageList = ["iron", "wood", "bricks", "cement"];

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
  DialogWidth: {
    " & .MuiDialog-paper": {
      width: "40%",
    },
  },
}));

const Orders = (props) => {
  const { downloadPdf } = props;
  const classes = useStyles();

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const DividerLine = ({ children }) => {
    return (
      <div className={classes.container}>
        <div className={classes.border} />
        <span className={classes.content}>{children}</span>
        <div className={classes.border} />
      </div>
    );
  };

  const DialogModal = (
    <React.Fragment>
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
          style={{ backgroundColor: "#cccccc", padding: "0.5em" }}
        >
          <Grid item container direction="row" style={{ textAlign: "center" }}>
            <Grid item lg={4}>
              <Typography>Item</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography>Quantity</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography>Amount</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            style={{ textAlign: "center", padding: "0.5em", color: "initial" }}
          >
            <Grid item lg={4}>
              <Typography variant="subtitle2">Kuwaiti Steel</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle2">1</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="subtitle2">KWD 258.00</Typography>
            </Grid>
          </Grid>
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
                <Typography variant="subtitle2">1</Typography>
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
                <Typography variant="subtitle2">KWD 20.00</Typography>
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
                <Typography variant="subtitle2">KWD 173.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );

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

        {allOrderItems.map((orderItem, index) => (
          <Grid
            key={orderItem.orderId}
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
                      {orderItem.orderPlaced}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h6" className={classes.textHeader}>
                      TOTAL
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      {orderItem.Total}
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
                      {orderItem.ShipTo}
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
                <Grid item container direction="column" justifyContent="center">
                  <Grid item>
                    <Button
                      style={{
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "0.93em",
                      }}
                      onClick={handleClickOpen}
                    >
                      View OrderDetails
                    </Button>
                  </Grid>
                </Grid>
                <Divider orientation="vertical" />
                <Grid item container direction="column" justifyContent="center">
                  <Grid item>
                    <Button
                      onClick={downloadPdf}
                      style={{
                        textTransform: "none",
                        fontWeight: "600",
                        fontSize: "0.93em",
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
                <Grid item>
                  <img
                    alt="productImg"
                    src={
                      require("../../assets/img/" + imageList[index] + ".jpg")
                        .default
                    }
                    style={{
                      borderRadius: "50%",
                      width: "5em",
                      height: "5em",
                      border: "1px solid #cccccc",
                    }}
                  ></img>
                </Grid>
                <Grid item style={{ padding: "1em" }}>
                  <Typography variant="subtitle1">
                    {orderItem.itemName}
                  </Typography>
                </Grid>
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
                  >
                    Track Order
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {DialogModal}
    </Fragment>
  );
};

export default Orders;
