import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import emptyCart from '../../assets/img/emptycart.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },
}));

const EmptyCart = () => {
  const classes = useStyles();

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
      <Paper className={classes.paper} style={{width: "50%"}}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item style={{textAlign:"center"}}>
            <img src={emptyCart} alt="EmptyCart" style={{width:"70%"}}/>
          </Grid>
          <Grid item>
              <Typography style={{fontSize: "1.1rem", fontWeight: "600"}} variant="h6">
                  Hey, it feels so light!
              </Typography>
          </Grid>
          <Grid item style={{textAlign:"center"}}>
              <Typography style={{fontSize: "0.9rem"}} variant="h6">
                  There is nothing in your bag .Let's add some items
              </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              style={{ marginTop: 10, margin: 10 }}
            >
              Start Buying
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default EmptyCart;
