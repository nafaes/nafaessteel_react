import React, { useCallback } from "react";
import {
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  formTextfield: {
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#0086b3 !important",
    },
    "& .MuiOutlinedInput-inputAdornedStart": {
      height: "8px",
    },
    width: "18em",
    marginBottom: "0.5em",
  },
}));

const PasswordInput = (props) => {
  const {
    name,
    valid,
    touched,
    label,
    value,
    showPassword,
    setPassword,
    togglePassword,
    errorMsg,
  } = props;

  const classes = useStyles();

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <TextField
      className={classes.formTextfield}
      label={label}
      required={true}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Visibility color="primary" />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
      name={name}
      onChange={setPassword}
      value={value}
      error={!valid && touched}
      helperText={!valid && touched ? errorMsg : null}
    />
  );
};

export default PasswordInput;
