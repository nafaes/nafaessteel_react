import { Button, Chip, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import kuwaitiIron from "../../assets/img/iron.jpg";
import wood from "../../assets/img/wood.jpg";
import Brick from "../../assets/img/bricks.jpg";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

const TrackOrder = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const DividerForm = ({ children }) => {
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
        disableScrollLock="true"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
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
        {/* <Grid item container direction="row">
               <Typography variant="h6" className={classes.mainHeader}>Your Orders</Typography>    
            </Grid> */}
        {/* <Divider style={{width: "97%",backgroundColor:"#0086b3"}} variant="middle"></Divider> */}
        <DividerForm>
          <Chip
            variant="outlined"
            color="primary"
            label="Your Orders"
            style={{ padding: "0px 25px", fontSize: "0.85em" }}
          />
        </DividerForm>
        <Grid item container style={{ margin: "1em auto", width: "70%" }}>
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
                  <Typography variant="subtitle2">10 August 2021</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    TOTAL
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">KWD 50.00</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    SHIP TO
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Nimeelya</Typography>
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
                  {/* <Typography variant="h6" className={classes.textHeader}>View OrderDetails</Typography>    */}
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
                  src={kuwaitiIron}
                  style={{
                    borderRadius: "50%",
                    width: "5em",
                    height: "5em",
                    border: "1px solid #cccccc",
                  }}
                  alt="productImage"
                />
              </Grid>
              <Grid item style={{ padding: "1em" }}>
                <Typography variant="subtitle1">Kuwaiti Iron</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg={6}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ paddingRight: "2em" }}
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
                >
                  Track Order
                </Button>
              </Grid>
              {/* <Grid item style={{marginLeft:"0.5em"}}>
                        <Button style={{backgroundColor:"#0086b3", color:"white", fontSize:"1.05em" ,padding:"0.2em 2em", textTransform:"none" }}>Cancel Order</Button>
                     </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "1em auto", width: "70%" }}>
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
                  <Typography variant="subtitle2">10 August 2021</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    TOTAL
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">KWD 50.00</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    SHIP TO
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Nimeelya</Typography>
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
                  {/* <Typography variant="h6" className={classes.textHeader}>View OrderDetails</Typography>    */}
                  <Button
                    style={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "0.93em",
                    }}
                  >
                    View OrderDetails
                  </Button>
                </Grid>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item container direction="column" justifyContent="center">
                <Grid item>
                  <Button
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
                  src={wood}
                  style={{
                    borderRadius: "50%",
                    width: "5em",
                    height: "5em",
                    border: "1px solid #cccccc",
                  }}
                  alt="productImage"
                />
              </Grid>
              <Grid item style={{ padding: "1em" }}>
                <Typography variant="subtitle1">Wood</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg={6}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ paddingRight: "2em" }}
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
                >
                  Track Order
                </Button>
              </Grid>
              {/* <Grid item style={{marginLeft:"0.5em"}}>
                        <Button style={{backgroundColor:"#0086b3", color:"white", fontSize:"1.05em" ,padding:"0.2em 2em", textTransform:"none" }}>Cancel Order</Button>
                     </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "1em auto", width: "70%" }}>
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
                  <Typography variant="subtitle2">10 August 2021</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    TOTAL
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">KWD 50.00</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.textHeader}>
                    SHIP TO
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Nimeelya</Typography>
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
                  {/* <Typography variant="h6" className={classes.textHeader}>View OrderDetails</Typography>    */}
                  <Button
                    style={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "0.93em",
                    }}
                  >
                    View OrderDetails
                  </Button>
                </Grid>
              </Grid>
              <Divider orientation="vertical" />
              <Grid item container direction="column" justifyContent="center">
                <Grid item>
                  <Button
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
              {/* <Grid item style={{padding:"1em"}}>
                        <Typography variant="subtitle1">Dispatched</Typography>
                     </Grid> */}
              <Grid item>
                <img
                  src={Brick}
                  style={{
                    borderRadius: "50%",
                    width: "5em",
                    height: "5em",
                    border: "1px solid #cccccc",
                  }}
                  alt="productImage"
                />
              </Grid>
              <Grid item style={{ padding: "1em" }}>
                <Typography variant="subtitle1">Brick</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              lg={6}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ paddingRight: "2em" }}
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
                >
                  Track Order
                </Button>
              </Grid>
              {/* <Grid item style={{marginLeft:"0.5em"}}>
                        <Button style={{backgroundColor:"#0086b3", color:"white", fontSize:"1.05em" ,padding:"0.2em 2em", textTransform:"none" }}>Cancel Order</Button>
                     </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TrackOrder;
