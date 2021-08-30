import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { signupMobCommon } from "./signupMobCommon";

export const signupEngMobile = (userCheckoutStyles) => {
     const formContainer = userCheckoutStyles
     ? {
         width: "100%",
         margin: "8em auto 7em auto",
         justifyContent: "center",
       }
     : signupMobCommon.formContainer;
 
   const signupContainForm = userCheckoutStyles
     ? {
         borderLeft: "none",
         borderLeftStyle: "none",
         height: "26em",
       }
     : signupMobCommon.signupContainForm;
 
   return makeStyles((theme) => ({
     ...signupMobCommon,
     formContainer: {
       ...formContainer,
     },
     signupContainForm: {
       ...signupContainForm,
     },
   }));

};