import React, { useEffect } from "react";
import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import paySuccess from "../assets/img/tick.png"

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin:" 0px auto",
    width: "4em !important",
    height: "4em !important",
    position: "relative",
    top: "-2em",
  }
}));

const PaymentSuccess = () => {
  const { paymentId, orderId, orderDate, trackId, paymentType } = useParams();
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <Grid container  style={{margin: "5em auto", width: "45%"}}>
        <Grid item container justifyContent="center">
            <Grid item>
            <img
              src={paySuccess}
              alt="bg"
              className={classes.avatar}
            />
            </Grid>        
        </Grid>
        <Grid
            container
            direction="column"
            justifyContent="center"
            style={{ color: "white", borderRadius: "5px", textAlign: "center" , marginTop: "-1em" }}
          >
            <Grid item >
                <Typography variant="h6" color="textPrimary" style={{color: "#0086af"}}>
                    Payment Successfull!!
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" color="textPrimary" style={{fontSize: "1.05rem",marginTop: "0.5em"}}>
                    We are processing your request and you will notified via email.
                </Typography>
            </Grid>
         </Grid>
         <Grid container style={{width: "75%" , margin: "0px 4em"}}>
         <Grid item container   
              style={{
                padding: "0.5em",
                marginTop: "2em",
                backgroundColor: "rgba(211, 211, 211,0.9)"
              }}>
              <Grid item lg={6}>
                <Typography  variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
                  {t("PaymentFailed.PaymentId")}
                </Typography>
              </Grid>
              <Grid item lg={6} style={{textAlign: "right"}}>
                <Typography variant="subtitle1" color="textSecondary">
                  {paymentId}
                </Typography>
              </Grid>    
         </Grid>
         <Grid item container   
              style={{
                padding: "0.5em",
                backgroundColor: "rgba(211, 211, 211,0.7)"
              }}>
              <Grid item lg={6}>
                <Typography  variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
                  {t("PaymentSuccess.OrderId")}
                </Typography>
              </Grid>
              <Grid item lg={6} style={{textAlign: "right"}}>
                <Typography variant="subtitle1" color="textSecondary">
                  {orderId}
                </Typography> 
              </Grid>                
         </Grid>
         <Grid item container   
              style={{
                padding: "0.5em",
                backgroundColor: "rgba(211, 211, 211,0.9)"
              }}>
              <Grid item lg={6}>
                <Typography  variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
                  {t("PaymentSuccess.OrderDate")}
                </Typography>
              </Grid>
              <Grid item lg={6} style={{textAlign: "right"}}>
                <Typography variant="subtitle1" color="textSecondary">
                  {orderDate}
                </Typography>
              </Grid>    
         </Grid>            
         <Grid item container   
              style={{
                padding: "0.5em",
                backgroundColor: "rgba(211, 211, 211,0.7)"
              }}>
              <Grid item lg={6}>
              <Typography  variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
                {t("PaymentSuccess.PaymentType")}
              </Typography>
              </Grid>
              <Grid item lg={6} style={{textAlign: "right"}}>
              <Typography variant="subtitle1" color="textSecondary">
                {trackId}
              </Typography>
              </Grid>    
         </Grid>
         {paymentType !== "NOTAPPLICABLE" ? (
              <Grid item container   
              style={{
                padding: "0.5em",
                backgroundColor: "rgba(211, 211, 211,0.9)"
              }}>
              <Grid item lg={6}>
                <Typography component="h4" variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
                  {t("PaymentSuccess.TrackId")}
                </Typography>
              </Grid>
              <Grid item lg={6} style={{textAlign: "right"}}>
                <Typography variant="subtitle1" color="textSecondary">
                  {paymentType}
                </Typography>
              </Grid>    
         </Grid>
            ) : null}
        
       
         </Grid>
       
    </Grid>


  );
};

export default PaymentSuccess;
