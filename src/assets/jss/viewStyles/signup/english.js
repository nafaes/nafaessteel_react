import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { signupMobCommon } from "./signupMobCommon";

export const signupEngMobile = (userCheckoutStyles) => {
  const formContainer = userCheckoutStyles
    ? {
        width: "100%",
        margin: "2em auto 1em auto !important",
        justifyContent: "center",
      }
    : signupMobCommon.formContainer;

  const signupContainForm = userCheckoutStyles
    ? {
        borderRadius: "0.5rem !important",
        maxWidth: "100% !important",
        padding: "2em 2em 0.5em !important",
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
