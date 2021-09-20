import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
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

const ForgotPassword = (props) => {
  const { email, inputChangeHandler, submitHandler, submit } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <form className={classes.form} noValidate onSubmit={submitHandler}>
        <Grid item container justifyContent="center">
          <Grid item>
            <Typography variant="h6">
              {t("SignIn.InputFields.ForgotPassword")}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={1} justifyContent="center">
          <Grid item style={{ marginTop: "1rem" }}>
            <TextField
              autoFocus={true}
              fullWidth
              label={t("SignIn.InputFields.Email")}
              id="email"
              variant="outlined"
              color="primary"
              required={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
              name="email"
              onChange={inputChangeHandler}
              error={!email.valid && email.touched}
              helperText={
                !email.valid && email.touched
                  ? t(email.validation.validationMsg.msg, {
                      length: email.validation.validationMsg.length,
                    })
                  : null
              }
              value={email.value}
              margin="dense"
            />
          </Grid>
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
              {t("ForgotPassword.InputFields.SendLink")}
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

export default ForgotPassword;
