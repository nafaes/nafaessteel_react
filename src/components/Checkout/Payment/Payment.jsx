import React, { useContext, useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { limitMaxlength } from "../../../utils/validations";

import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PaymentIcon from '@material-ui/icons/Payment';
import { CheckoutContext } from "../../../pages/CheckoutPage";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";
import RadioButton from "../../../common/RadioButton/RadioButton";
import { getOtp } from "../../../services/checkout";
import { GlobalContext } from "../../../context/Provider";


export const Payment = (props) => {
  const { checkoutHandler, paymentType, setPaymentType, paymentLoading, errorVisible,otpForm,setOtpForm ,errorMessage} = useContext(CheckoutContext);
  const { languageId, userState: { userEmail }} = useContext(GlobalContext);
  const { t } = useTranslation();
  const classes = checkoutStyles();
  const [OtpVerify, setOtpVerify] = useState([])
 
  const handlePaymentType = async(event, newValue) => {
    console.log(newValue);
    setPaymentType(newValue);
    if (newValue === "PAYMENTONDELIVERY") {
      const otpVerify = await getOtp(userEmail,languageId);
      setOtpVerify(otpVerify);
    }
   
  };
  const otpFormChangeHandler = ({ target: { value, name } }) => {
    let updatedForm = {
      ...otpForm,
      [name]: {
        ...otpForm[name],
        value: value,
      },
    };
   
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      if (typeof updatedForm[inputIdentifier] === "object") {
        formIsValid = updatedForm[inputIdentifier].value !== "" && formIsValid;
      }
    }
    setOtpForm({ ...updatedForm, formIsValid });
    
  }
  
   return (
    <Paper
      elevation={12}
      style={{width: "100%", margin: "0px auto",padding: "1em 0px 1em 0px",borderRadius: "1em"}}>
      <FormControl component="fieldset" fullWidth={true}>
        <RadioGroup aria-label=""
          name="customized-radios"
          className={classes.radioContainer}
          value={paymentType}
          onChange={handlePaymentType}>
          <FormControlLabel
            value="PAYMENTONDELIVERY"
            control={<RadioButton/>}
            label= {t("Checkout.PaymentOnDelivery")}
            className={classes.paymentRadioBtns}
          />
          <FormControlLabel
            value="KNET"
            control={<RadioButton/>}
            label={t("Checkout.CheckoutUsingKNET")}
            className={classes.paymentRadioBtns}
          />
        </RadioGroup>
     
      </FormControl>      

      {!paymentType && errorVisible &&
          <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body1" style={{color: "red"}}>
                {t("Checkout.SelectPaymentType")}
                </Typography>
              </Grid>
          </Grid>} 
      
      {paymentType === "PAYMENTONDELIVERY" && 
          (<Grid item container style={{display: "block"}}>
              <Grid item style={{textAlign: "center"}}>
                <Typography variant="body1" style={{fontSize:"0.85rem",margin: "1em 0px 0px"}}> 
                    {`${OtpVerify.message}`}
                </Typography>
              </Grid>
              <Grid item className={classes.otpInput}>  
              
                 <TextField variant="standard" name="otp"
                 type="number"
                 onKeyPress={(event) => {
                  limitMaxlength(event, 5);
                
                }}
                    onChange={otpFormChangeHandler}
                    value={otpForm.otp.value ? otpForm.otp.value : ""}
                    error={errorMessage ? errorMessage : !otpForm.otp.valid && otpForm.otp.value === ""}
                    helperText={
                      errorMessage ? errorMessage : 
                      !otpForm.otp.valid && otpForm.otp.value === ""
                        ? t(otpForm.otp.validationMsg)
                        : null
                    }  
                   
                 />
              </Grid>
          </Grid>
      )} 
      <Grid container justifyContent="center">
        <Grid
          item
          style={{
            marginTop: "0.5em",
            width: "50%",
            padding: ".1em 0px",
            textAlign: "center"
          }}
        >
          <div className={classes.buttonWrapper}>
            <Button
              size="small"
              margin="dense"
              spacing={1}
              color="primary"
              variant="contained"
              onClick={checkoutHandler.bind(null)}
              // disabled={paymentType === "" ? true : false || paymentLoading}
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#fff",
                borderRadius: "1em",
                width: "50%",
                background: 'linear-gradient(45deg, #0086b3 30%, #51a8c4 90%)'
              }}
              endIcon={
                <PaymentIcon style={{ fontSize: "1.3rem" }} />
              }
            >
              {t("Checkout.Pay")}
            </Button>
            {paymentType !== "" ? paymentLoading && (
              <CircularProgress size={28} className={classes.buttonProgress} />
            ):null}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
