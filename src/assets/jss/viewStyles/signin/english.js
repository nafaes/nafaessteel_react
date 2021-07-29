import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { signinMobCommon } from "./signinCommon";

export const signinEngMobile = makeStyles((theme) => ({
     ...signinMobCommon,
     loginContainer: {
          ...signinMobCommon.loginContainer,
          [theme.breakpoints.down("xs")]:{
               width: "100%"
          },
          [theme.breakpoints.down("md")]:{
               width: "100%"
          }
     }
   
}));