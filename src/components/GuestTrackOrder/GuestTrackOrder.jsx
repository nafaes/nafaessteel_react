import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useTranslation } from "react-i18next";
import { blue } from "@material-ui/core/colors";

import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    width: "60%",
    maxWidth: "calc(100% + 16px)",
    margin: "3rem auto 0 auto",
    paddingTop: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  wrapper: {
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
    marginTop: -11,
    marginLeft: -12,
  },
}));

const GuestTrackOrder = (props) => {
  const { trackOrderForm, formChangeHandler, submit, submitHandler } = props;
  const { t } = useTranslation();
  const classes = { ...checkoutStyles(), ...useStyles() };

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <div style={{ margin: "auto 0px 1em 0px" }}>
        <Grid item container justifyContent="center">
          <Grid item>
            <Typography variant="h6" style={{ paddingBottom: "20px" }}>
              {t("TrackOrder.Text")}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <TextField
            className={classes.formTextfield}
            label={t("TrackOrder.InputFields.OrderTrackId")}
            required={true}
            variant="outlined"
            name="trackOrderId"
            onChange={formChangeHandler}
            value={trackOrderForm.trackOrderId.value}
            error={
              !trackOrderForm.trackOrderId.valid &&
              trackOrderForm.trackOrderId.value === ""
            }
            helperText={
              !trackOrderForm.trackOrderId.valid &&
              trackOrderForm.trackOrderId.value === ""
                ? t(trackOrderForm.trackOrderId.validationMsg)
                : null
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalShippingIcon fontSize="small" />
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
            className={classes.formTextfield}
            label={t("SignIn.InputFields.Email")}
            required={true}
            variant="outlined"
            name="email"
            onChange={formChangeHandler}
            value={trackOrderForm.email.value}
            error={!trackOrderForm.email.valid}
            helperText={
              !trackOrderForm.email.valid
                ? t(trackOrderForm.email.validation.validationMsg.msg, {
                    length: trackOrderForm.email.validation.validationMsg.length,
                  })
                : null
            }
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
          />
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              disabled={submit}
              margin="dense"
              onClick={submitHandler.bind(null)}
              className={classes.submit}
            >
              {t("TrackOrder.InputFields.Submit")}
            </Button>
            {submit && (
              <CircularProgress size={28} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
      </div>
    </Grid>
  );
};

export default GuestTrackOrder;
