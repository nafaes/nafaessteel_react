import React from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/AddShoppingCart";
import GroupAddIcon from "@material-ui/icons/LocalShipping";
import StepConnector from "@material-ui/core/StepConnector";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import clsx from "clsx";


import { Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  DialogWidth: {
    " & .MuiDialog-paper": {
      width: "40%",
    },
  },
  DialogHeader: {
    padding: "0.5em 0em",
  },
  textHeader: {
    fontSize: "0.75em",
    fontWeight: "600",
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(52, 174, 235) 0%, rgb(52, 147, 235) 50%, rgb(15, 76, 133) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(52, 174, 235) 0%, rgb(52, 147, 235) 50%, rgb(15, 76, 133) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(52, 174, 235) 0%, rgb(52, 147, 235) 50%, rgb(15, 76, 133) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(52, 174, 235) 0%, rgb(52, 147, 235) 50%, rgb(15, 76, 133) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <DirectionsRunIcon />,
    4: <CheckCircleIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ["Order Placed", "Shipped", "Arriving", "Delivered"];
}

const TrackOrder = (props) => {
  const { openTrackOrder, handleCloseTrackOrder } = props;
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  return (
    <Dialog
      open={openTrackOrder}
      onClose={handleCloseTrackOrder}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableScrollLock={true}
      className={classes.DialogWidth}>
      <DialogTitle className={classes.DialogHeader}>
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item lg={4} style={{padding: "8px 1em"}}>
            <Typography variant="h6" className={classes.textHeader}>Track Item</Typography>
          </Grid>
          <Grid item >
              <IconButton onClick={handleCloseTrackOrder}>
                <CloseIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider/>
      <DialogContent style={{ padding: "2px 1px" }}>
        <Stepper alternativeLabel
          activeStep={2}
          connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> 
      </DialogContent>
    </Dialog>
 
  )

}
export default TrackOrder;
