import { makeStyles } from "@material-ui/core";
//import { responsiveStyles } from "../../common/responsiveStyles"
import { navbarMobCommon } from "./navbarCommon";

export const navbarEngMobile = makeStyles((theme) => ({
     ...navbarMobCommon,
     logoContainer: {
          [theme.breakpoints.down("xs")]: {
               margin: "auto",
          },
          [theme.breakpoints.down("md")]: {
               margin: "auto",
          },
     },
     logo: {
          [theme.breakpoints.down("xs")]: {
               marginLeft: "9em",
          },
          [theme.breakpoints.down("md")]: {
               marginLeft: "9em",
          },
         
     }
}));