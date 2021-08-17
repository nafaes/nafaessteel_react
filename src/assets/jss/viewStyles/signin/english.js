import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { signinMobCommon } from "./signinMobCommon";

export const signinEngMobile = (userCheckoutStyles) => {
  const formContainer = userCheckoutStyles
    ? {
        width: "100%",
        // margin: "5em auto",
        margin: "5em auto 3em auto",
        justifyContent: "center",
      }
    : signinMobCommon.formContainer;

  const loginContainForm = userCheckoutStyles
    ? {
        borderLeft: "none",
        borderLeftStyle: "none",
        height: "10em",
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
