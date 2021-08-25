import React, { useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import CartSummary from "./CartSummary/CartSummary";
import DesktopCartItems from "./CartItems/CartItems";
import { GlobalContext } from "../../../context/Provider";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const DesktopCart = () => {
  const classes = useStyles();

  const {
    cartItems,
    totalCartItems,
    totalCartAmount,
    dispatchCartActions
  } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3} className={classes.mainGrid}>
          <DesktopCartItems
            cartItems={cartItems}
            totalCartItems={totalCartItems}
            totalCartAmount={totalCartAmount}
            dispatchCartActions={dispatchCartActions}
          />
          <CartSummary
            totalCartItems={totalCartItems}
            totalCartAmount={totalCartAmount}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DesktopCart;
