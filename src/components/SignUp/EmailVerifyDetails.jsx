import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Dialog, DialogContent } from "@material-ui/core";

import verifyEmail from "../../assets/img/verifyemail.jpg";
import { Link } from "react-router-dom";
import { SIGNIN } from "../../constants/routes";

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

const EmailVerifyDetails = (props) => {
  const { openDialog, handleClose } = props;

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
      {/* <DialogTitle
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
                hi
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleClose} style={{ padding: "0px" }}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle> */}
      <DialogContent style={{ padding: "0px" }}>
        <Grid
          item
          container
          direction="row"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item style={{ textAlign: "center", marginTop: "1.5em" }}>
            <img src={verifyEmail} alt="EmptyCart" style={{ width: "30%" }} />
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "1.1rem", fontWeight: "600", color: "green" }}
              variant="h6"
            >
              Account Created Successfully
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
              variant="h6"
            >
              Verify Your Email
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography style={{ fontSize: "0.9rem" }} variant="h6">
              We've sent an verification email to your registered email address
              so we know it's really you!
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to={SIGNIN}
              variant="contained"
              color="primary"
              style={{ marginTop: 10, margin: 10 }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerifyDetails;
