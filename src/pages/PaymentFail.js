import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "#fff",
    borderRadius: "20px",
    height: "100%",
    minHeight: "100vh",
    // width: "100%",
    width: "60%",
    maxWidth: "calc(100% + 16px)",
    margin: "3rem auto 0 auto",
    paddingTop: "20px",
  },
  card: {
    margin: theme.spacing(0) + " auto",
    maxWidth: "475px",
    overflow: "visible",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  content: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    color: "#ff0000"
  },
}));

const PaymentFail = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item>
        <Typography variant="h4" className={classes.title}>Payment Failed</Typography>
      </Grid>
    </Grid>
  );
};

export default PaymentFail;
