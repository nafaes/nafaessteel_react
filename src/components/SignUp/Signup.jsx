import React, { Fragment, useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import login from "../../assets/img/Login-illustration.svg";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";

import signupEngDesk from "../../assets/scss/user.module.scss";
import { signupEngMobile } from "../../assets/jss/viewStyles/signup/english";
import { isInputNumber } from "../../utils/validations";

const SignUp = (props) => {
  const { signupForm, formChangeHandler, signupHandler, isDisplayImage, userCheckoutStyles } = props;
  const englishMobileStyles = signupEngMobile(userCheckoutStyles)();
  let classesExternal = signupEngDesk;
  let classes = englishMobileStyles;
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Fragment>
      <Fragment>
        <Grid
          container
          direction="row"
          className={clsx(classes.formContainer, classesExternal.formContainer)}
        >
          {isDisplayImage ? (
            <Grid
              item
              container
              lg={6}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={login}
                  alt="bg"
                  className={clsx(
                    classes.loginImage,
                    classesExternal.loginImage
                  )}
                />
              </Grid>
            </Grid>
          ) : null}
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            lg={6}
            className={clsx(
              classes.signupContainForm,
              classesExternal.signupContainForm
            )}
          >
            <form>
              <Grid>
                <Grid item>
                  <TextField
                    className={clsx(
                      classes.formTextfield,
                      classesExternal.formTextfield
                    )}
                    label="Name"
                    name="name"
                    id="name"
                    variant="outlined"
                    required={true}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    onChange={formChangeHandler}
                    value={signupForm.name.value}
                    error={!signupForm.name.valid && signupForm.name.touched}
                    helperText={
                      !signupForm.name.valid && signupForm.name.touched
                        ? signupForm.name.validation.validationMsg
                        : null
                    }
                  />
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <TextField
                    className={clsx(
                      classes.formTextfield,
                      classesExternal.formTextfield
                    )}
                    label="Email"
                    name="email"
                    id="email"
                    variant="outlined"
                    required={true}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    onChange={formChangeHandler}
                    value={signupForm.email.value}
                    error={!signupForm.email.valid && signupForm.email.touched}
                    helperText={
                      !signupForm.email.valid && signupForm.email.touched
                        ? signupForm.email.validation.validationMsg
                        : null
                    }
                  />
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <TextField
                    className={clsx(
                      classes.formTextfield,
                      classesExternal.formTextfield
                    )}
                    label="Password"
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={formChangeHandler}
                    value={signupForm.password.value}
                    error={!signupForm.password.valid && signupForm.password.touched}
                    helperText={
                      !signupForm.password.valid && signupForm.password.touched
                        ? signupForm.password.validation.validationMsg
                        : null
                    }
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
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
                  />
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <TextField
                    className={clsx(
                      classes.formTextfield,
                      classesExternal.formTextfield
                    )}
                    label="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    // onChange={conformPasswordHandler}
                    onChange={formChangeHandler}
                    value={signupForm.confirmPassword.value}
                    error={!signupForm.confirmPassword.valid && signupForm.confirmPassword.touched}
                    helperText={
                      !signupForm.confirmPassword.valid && signupForm.confirmPassword.touched
                        ? signupForm.confirmPassword.validation.validationMsg
                        : null
                    }
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <TextField
                    className={clsx(
                      classes.formTextfield,
                      classesExternal.formTextfield
                    )}
                    label="Mobile Number"
                    name="mobileNumber"
                    id="mobileNumber"
                    variant="outlined"
                    required={true}
                    onChange={formChangeHandler}
                    onKeyPress={(event) => {
                      isInputNumber(event, 8);
                    }}
                    value={signupForm.mobileNumber.value}
                    error={!signupForm.mobileNumber.valid && signupForm.mobileNumber.touched}
                    helperText={
                      !signupForm.mobileNumber.valid && signupForm.mobileNumber.touched
                        ? signupForm.mobileNumber.validation.validationMsg
                        : null
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CallIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                </Grid>
                <Grid item style={{ textAlign: "center", marginTop: "1em" }}>
                  <Button className={clsx(classesExternal.formBtn)} onClick={signupHandler} disabled={!signupForm.formIsValid}>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    </Fragment>
  );
};

export default SignUp;
