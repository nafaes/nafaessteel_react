import React from "react";
import { useParams } from "react-router";
import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import failed from "../assets/img/failed.png";


const useStyles = makeStyles((theme) => ({
  avatar: {
    margin:" 0px auto",
    width: "4em !important",
    height: "4em !important",
    position: "relative",
    top: "-2em",
  }
}));

const PaymentFailed = () => {
  const { status, paymentId, referenceNo, amount } = useParams();
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container  style={{margin: "5em auto", width: "45%"}}>
      <Grid item container justifyContent="center">
          <Grid item>
          <img
            src={failed}
            alt="bg"
            className={classes.avatar}
          />
          </Grid>        
      </Grid>
      <Grid container direction="column" justifyContent="center"
          style={{ color: "white", borderRadius: "5px", textAlign: "center" , marginTop: "-1em" }} >   
          <Grid item >
              <Typography variant="h6" color="textPrimary" style={{color: "#0086af"}}>
                  Payment Failed
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
                  {t("PaymentFailed.Status")}
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
                {t("PaymentFailed.PaymentId")}           
             </Typography>
          </Grid>
          <Grid item lg={6} style={{textAlign: "right"}}>
          <Typography variant="subtitle1" color="textSecondary">
              {status}
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
                {t("PaymentFailed.ReferenceNumber")}
                </Typography>
            </Grid>
          <Grid item lg={6} style={{textAlign: "right"}}>
              <Typography variant="subtitle1" color="textSecondary">
              {referenceNo}
              </Typography>
          </Grid>    
        </Grid>
        <Grid item container   
          style={{
            padding: "0.5em",
            backgroundColor: "rgba(211, 211, 211,0.9)"
          }}>
          <Grid item lg={6}>
            <Typography component="h4" variant="h6" color="textPrimary" style={{fontSize: "1.15rem"}}>
            {t("PaymentFailed.Amount")}
            </Typography>
          </Grid>
          <Grid item lg={6} style={{textAlign: "right"}}>
            <Typography variant="subtitle1" color="textSecondary">
               {amount}
            </Typography>
          </Grid>    
      </Grid>
    </Grid>
   
</Grid>
  );
};

export default PaymentFailed;
