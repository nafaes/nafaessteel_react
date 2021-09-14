import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Checkout from "./Checkout";
import CheckoutSummary from "./CheckoutSummary";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const CheckoutContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3} className={classes.mainGrid}>
          <Checkout style={{ clear: "both" }} />
          <CheckoutSummary />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CheckoutContainer;
