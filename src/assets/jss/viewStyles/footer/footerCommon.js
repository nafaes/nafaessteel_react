import { createTheme } from "@material-ui/core/styles";
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const footerMobCommon = {
    footerContainer:{
         backgroundColor: "rgb(145, 153 ,161)",
     },
     footerlogo:{
        width: "5em",
     },
     footerIconsContainer:{
       textAlign: "right",
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
        fontSize: "1.5em",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1em",
            marginTop: ".3em"
         },
    }
}
