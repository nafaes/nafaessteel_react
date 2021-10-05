import React, { useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import signinEngDesk from "../../assets/scss/user.module.scss";
import { signinEngMobile } from "../../assets/jss/viewStyles/signin/english";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { FORGOTPASSWORD, SIGNUP } from "../../constants/routes";
import login from "../../assets/img/Login-illustration.svg";

const SignIn = (props) => {
  const {
    signinForm,
    formChangeHandler,
    signinHandler,
    isDisplayImage,
    userCheckoutStyles,
    loginLoading,
  } = props;
  const { t } = useTranslation();

  const englishMobileStyles = signinEngMobile(userCheckoutStyles)();
  let classesExternal = signinEngDesk;
  let classes = englishMobileStyles;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Grid
      container
      direction="row"
      className={clsx(classes.formContainer, classesExternal.formContainer)}
    >
      {isDisplayImage ? (
        <Grid item container lg={6} justifyContent="center" alignItems="center">
          <Grid item>
            <img
              src={login}
              alt="bg"
              className={clsx(classes.loginImage, classesExternal.loginImage)}
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
          classes.loginContainForm,
          classesExternal.loginContainForm
        )}
      >
        <form onSubmit={signinHandler} noValidate>
          <Grid>
            <Grid item>
              <TextField
                className={clsx(
                  classes.formTextfield,
                  classesExternal.formTextfield
                )}
                autoFocus={true}
                label={t("SignIn.InputFields.Email")}
                id="email"
                variant="outlined"
                required={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                name="email"
                onChange={formChangeHandler}
                value={signinForm.email.value}
                error={!signinForm.email.valid && signinForm.email.touched}
                helperText={
                  !signinForm.email.valid && signinForm.email.touched
                    ? t(signinForm.email.validation.validationMsg.msg, {
                        length: signinForm.email.validation.validationMsg.length,
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
                id="password"
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
                name="password"
                onChange={formChangeHandler}
                value={signinForm.password.value}
                error={!signinForm.password.valid && signinForm.password.touched}
                helperText={
                  !signinForm.password.valid && signinForm.password.touched
                    ? t(signinForm.password.validation.validationMsg.msg, {
                        length: signinForm.password.validation.validationMsg.length,
                      })
                    : null
                }
              />
            </Grid>
            <Grid item style={{ textAlign: "right" }}>
              <Link
                to={FORGOTPASSWORD}
                style={{
                  marginBottom: "0.5em",
                  textDecoration: "none",
                  color: "#0086b3",
                }}
              >
                {t("SignIn.InputFields.ForgotPassword")}
              </Link>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
              <div className={classes.buttonWrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  className={classesExternal.formBtn}
                  disabled={loginLoading}
                >
                  {t("SignIn.InputFields.SignIn")}
                </Button>
                {loginLoading && (
                  <CircularProgress
                    size={28}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </Grid>

            {userCheckoutStyles === false ? (
              <Grid item style={{ textAlign: "center" }}>
                <label>{`${t("SignIn.InputFields.DontHaveAccount")} ?`}</label>
                <Button
                  style={{ textTransform: "none" }}
                  component={Link}
                  to={SIGNUP}
                >
                  {t("SignIn.InputFields.SignUp")}
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignIn;
