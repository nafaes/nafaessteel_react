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
  const {
    cartState: { totalItems, items, totalAmount },
    dispatchCartActions,
  } = useContext(GlobalContext);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3} className={classes.mainGrid}>
          <DesktopCartItems
            cartItems={items}
            totalCartItems={totalItems}
            totalCartAmount={totalAmount}
            dispatchCartActions={dispatchCartActions}
          />
          <CartSummary
            totalCartItems={totalItems}
            totalCartAmount={totalAmount}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DesktopCart;
