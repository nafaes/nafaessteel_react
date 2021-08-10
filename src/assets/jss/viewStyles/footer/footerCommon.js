import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const footerMobCommon = {
    footerContainer:{
         backgroundColor: theme.palette.common.blue,
     },
     footerlogo:{
        width: "5em",
     },
     footerIconsContainer:{
       "& .MuiIconButton-root": {
            padding: "6px",
        },
     },
     footerTxt: {
        fontSize: "1em",
        [theme.breakpoints.down("xs")]: {
           fontSize: "0.60em",
           paddingLeft:".6em",
           marginTop: "1.5em"
        },
    },
    footerIcons:{
        fontSize: "2em",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1em",
            marginTop: ".3em"
         },
    }
}
