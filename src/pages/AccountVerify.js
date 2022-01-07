import React, { useEffect } from "react";
import { useParams } from "react-router";

import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import verify from "../assets/img/tick.jpg";
import { SIGNIN } from "../constants/routes";
import { updateAccount } from "../services/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },
}));

const AccountVerify = () => {
  const { email } = useParams();
  const classes = useStyles();

  useEffect(() => {
    updateAccount(email);
  }, [email]);

  return (
    <Grid
      container
      style={{
        margin: "4em auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper className={classes.paper} style={{ width: "50%" }}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item style={{ textAlign: "center" }}>
            <img src={verify} alt="EmptyCart" style={{ width: "70%" }} />
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
              variant="h6"
            >
              Verified ...
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography style={{ fontSize: "0.9rem" }} variant="h6">
              Your Account is verified successfully.
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
              Login Here
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AccountVerify;
