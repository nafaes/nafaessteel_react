import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import CartSummary from "./CartSummary/CartSummary";
import DesktopCartItems from "./CartItems/CartItems";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const DesktopCart = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3} className={classes.mainGrid}>
          <DesktopCartItems />
          <CartSummary />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DesktopCart;
