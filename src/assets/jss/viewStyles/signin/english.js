import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { signinMobCommon } from "./signinMobCommon";

export const signinEngMobile = (userCheckoutStyles) => {
  const formContainer = userCheckoutStyles
    ? {
        width: "100%",
        margin: "2em auto 2em auto !important",
        justifyContent: "center",
       
      }
    : signinMobCommon.formContainer;

  const loginContainForm = userCheckoutStyles
    ? {
        borderRadius: "0.5rem !important",     
        maxWidth: "100% !important",
       padding: "2em 2em 0.5em",
      }
    : signinMobCommon.loginContainForm;

  return makeStyles((theme) => ({
    ...signinMobCommon,
    formContainer: {
      ...formContainer,
    },
    loginContainForm: {
      ...loginContainForm,
    },
  }));
  
};
