import React, { useState } from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

function TransitionRight(props) {
  return <Slide {...props} direction="left" />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(12),
  },
}));

const Notification = (props) => {
  const { notify: { isOpen, message, type }, setNotify } = props;
  const classes = useStyles();

  const [notifyDirection] = useState({
    vertical: "top",
    horizontal: "right",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({ ...props.notify, isOpen: false });
  };

  return (
    <Snackbar
      data-test="NotificationComponent"
      className={classes.root}
      open={isOpen}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: notifyDirection.vertical,
        horizontal: notifyDirection.horizontal,
      }}
      onClose={handleClose}
      TransitionComponent={TransitionRight}
    >
      <MuiAlert
        elevation={8}
        variant="filled"
        severity={type}
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default React.memo(Notification);
