import React from "react";
import { useTranslation } from "react-i18next";
import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

import PasswordInput from "../../common/PasswordInput/PasswordInput";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#fff",
    borderRadius: "20px",
    // width: "100%",
    width: "60%",
    maxWidth: "calc(100% + 16px)",
    margin: "3rem auto 0 auto",
    paddingTop: "20px",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "16px",
    width: "100%",
    padding: "2rem",
  },
  wrapper: {
    // width: "100%",
    margin: theme.spacing(1),
    position: "relative",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "1rem",
    width: "90%",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },
  buttonProgress: {
    color: blue[600],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -14,
    marginLeft: -12,
  },
}));

const ResetPassword = (props) => {
  const {
    submit,
    // notify,
    // setNotify,
    resetPasswordForm,
    submitHandler,
    inputChangeHandler,
    confirmPasswordHandler,
    showNewPassword,
    handleShowNewPassword,
    showConfirmPassword,
    handleShowConfirmPassword,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <form className={classes.form} noValidate onSubmit={submitHandler}>
        <Grid item container justifyContent="center">
          <Grid item>
            <Typography variant="h6">
              {t("ResetPassword.InputFields.ResetPassword")}
            </Typography>
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: "1rem" }}>
          <PasswordInput
            name="newPassword"
            label={t("ResetPassword.InputFields.NewPassword")}
            value={resetPasswordForm.newPassword.value}
            valid={resetPasswordForm.newPassword.valid}
            touched={resetPasswordForm.newPassword.touched}
            setPassword={inputChangeHandler}
            showPassword={showNewPassword}
            togglePassword={handleShowNewPassword}
            errorMsg={t(
              resetPasswordForm.newPassword.validation.validationMsg.msg,
              {
                length: resetPasswordForm.newPassword.validation.validationMsg.length,
              }
            )}
          />
        </Grid>

        <Grid item style={{ marginTop: "1rem" }}>
          <PasswordInput
            name="confirmPassword"
            label={t("ResetPassword.InputFields.ConfirmPassword")}
            value={resetPasswordForm.confirmPassword.value}
            valid={resetPasswordForm.confirmPassword.valid}
            touched={resetPasswordForm.confirmPassword.touched}
            setPassword={confirmPasswordHandler}
            showPassword={showConfirmPassword}
            togglePassword={handleShowConfirmPassword}
            errorMsg={t(
              resetPasswordForm.confirmPassword.validation.validationMsg.msg,
              {
                length: resetPasswordForm.confirmPassword.validation.validationMsg.length,
              }
            )}
          />
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={submit}
              margin="dense"
              className={classes.submit}
            >
              {t("ResetPassword.InputFields.ResetPassword")}
            </Button>
            {submit && (
              <CircularProgress size={28} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
      </form>
    </Grid>
  );
};

export default ResetPassword;
