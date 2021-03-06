import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

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
      <Paper className={classes.paper} style={{width: "80%", height: "120px",}}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Empty Cart
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
