import React, { Fragment, useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import login from "../../assets/img/Login-illustration.svg";
import {
  Button,
  CircularProgress,
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
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import signupEngDesk from "../../assets/scss/user.module.scss";
import { signupEngMobile } from "../../assets/jss/viewStyles/signup/english";
import { limitMaxlength } from "../../utils/validations";

const SignUp = (props) => {
  const {
    signupForm,
    formChangeHandler,
    conformPasswordHandler,
    signupHandler,
    isDisplayImage,
    userCheckoutStyles,
    submit,
  } = props;
  const { t } = useTranslation();
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
                    label={t("SignUp.InputFields.Name")}
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
                        ? t(signupForm.name.validation.validationMsg.msg, {
                            length:
                              signupForm.name.validation.validationMsg.length,
                          })
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
                    label={t("SignIn.InputFields.Email")}
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
                        ? t(signupForm.email.validation.validationMsg.msg, {
                            length:
                              signupForm.email.validation.validationMsg.length,
                          })
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
                    label={t("SignIn.InputFields.Password")}
                    required={true}
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    onChange={formChangeHandler}
                    value={signupForm.password.value}
                    error={
                      !signupForm.password.valid && signupForm.password.touched
                    }
                    helperText={
                      !signupForm.password.valid && signupForm.password.touched
                        ? t(signupForm.password.validation.validationMsg.msg, {
                            length:
                              signupForm.password.validation.validationMsg
                                .length,
                          })
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
                    label={t("SignUp.InputFields.ConfirmPassword")}
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    required={true}
                    onChange={conformPasswordHandler}
                    value={signupForm.confirmPassword.value}
                    error={
                      !signupForm.confirmPassword.valid &&
                      signupForm.confirmPassword.touched
                    }
                    helperText={
                      !signupForm.confirmPassword.valid &&
                      signupForm.confirmPassword.touched
                        ? t(
                            signupForm.confirmPassword.validation.validationMsg
                              .msg
                          )
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
                    label={t("SignUp.InputFields.MobileNumber")}
                    name="mobileNumber"
                    id="mobileNumber"
                    variant="outlined"
                    required={true}
                    onChange={formChangeHandler}
                    type="number"
                    autoComplete="off"
                    onKeyPress={(event) => {
                      limitMaxlength(event, 8);
                    }}
                    value={signupForm.mobileNumber.value}
                    error={
                      !signupForm.mobileNumber.valid &&
                      signupForm.mobileNumber.touched
                    }
                    helperText={
                      !signupForm.mobileNumber.valid &&
                      signupForm.mobileNumber.touched
                        ? t(
                            signupForm.mobileNumber.validation.validationMsg.msg
                          )
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
                  <div className={classes.buttonWrapper}>
                    <Button
                      size="small"
                      fullWidth
                      margin="dense"
                      spacing={1}
                      color="primary"
                      variant="contained"
                      onClick={signupHandler.bind(null)}
                      disabled={!signupForm.formIsValid || submit}
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#fff",
                        borderRadius: "1em",
                      }}
                    >
                      {t("SignIn.InputFields.SignUp")}
                    </Button>
                    {submit && (
                      <CircularProgress
                        size={28}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>

                  {/* <Button
                    className={clsx(classesExternal.formBtn)}
                    onClick={signupHandler}
                    disabled={!signupForm.formIsValid}
                  >
                    {t("SignIn.InputFields.SignUp")}
                  </Button> */}
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
