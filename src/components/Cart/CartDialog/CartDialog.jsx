import React from "react";
import {
  Button,
  DialogActions,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  DialogWidth: {
    " & .MuiDialog-paper": {
      width: "40%",
    },
  },
  textHeader: {
    fontSize: "0.75em",
    fontWeight: "600",
  },
}));

const CartDialog = (props) => {
  const { openDialog, validationItems, proceedHandler, handleClose } = props;
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
        style={{ backgroundColor: "#cccccc", padding: "0.5em", margin: "1px" }}
      >
        <Grid item container direction="row" style={{ textAlign: "center" }}>
          <Grid item lg={4}>
            <Typography variant="h6" className={classes.textHeader}>
              ITEM
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h6" className={classes.textHeader}>
              NEW PRICE
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="h6" className={classes.textHeader}>
              OLD PRICE
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent style={{ padding: "2px 1px" }}>
        {validationItems
          ? validationItems.map(({ id, item, newPrice, oldPrice }) => (
              <Grid
                key={id}
                container
                direction="row"
                style={{
                  textAlign: "center",
                  padding: "0.5em",
                  color: "initial",
                }}
              >
                <Grid item lg={4}>
                  <Typography variant="subtitle2">{item}</Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography variant="subtitle2">{newPrice}</Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography variant="subtitle2">{oldPrice}</Typography>
                </Grid>
              </Grid>
            ))
          : null}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
          style={{
            textTransform: "none",
            fontWeight: "600",
            fontSize: "0.93em",
            backgroundColor: "#0086b3",
            color: "white",
          }}
        >
          Disagree
        </Button>
        <Button
          onClick={proceedHandler}
          style={{
            textTransform: "none",
            fontWeight: "600",
            fontSize: "0.93em",
            backgroundColor: "#0086b3",
            color: "white",
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
