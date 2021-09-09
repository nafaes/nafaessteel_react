import React, { useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Button,
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

import { SIGNUP } from "../../constants/routes";
import login from "../../assets/img/Login-illustration.svg";

const SignIn = (props) => {
  const {
    signinForm,
    formChangeHandler,
    signinHandler,
    isDisplayImage,
    userCheckoutStyles,
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
        <form>
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
                error={
                  !signinForm.password.valid && signinForm.password.touched
                }
                helperText={
                  !signinForm.password.valid && signinForm.password.touched
                    ? t(signinForm.password.validation.validationMsg.msg, {
                      length: signinForm.password.validation.validationMsg.length
                    })
                    : null
                }
              />
            </Grid>
            <Grid item style={{ textAlign: "right" }}>
              <Button style={{ textTransform: "none", marginBottom: "0.5em" }}>
                {`${t("SignIn.InputFields.ForgotPassword")} ?`}
              </Button>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
              <Button
                className={classesExternal.formBtn}
                onClick={signinHandler}
                disabled={
                  signinForm.email.valid === false ||
                  signinForm.password.valid === false
                }
              >
                {t("SignIn.InputFields.SignIn")}
              </Button>
            </Grid>

            {userCheckoutStyles === false && (
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
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignIn;
