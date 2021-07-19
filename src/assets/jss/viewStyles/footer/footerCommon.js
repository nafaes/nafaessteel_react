import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const footerMobCommon = {
    footerContainer:{
        backgroundColor: theme.palette.common.blue,
        position: "absolute",
        left: 0,
        right: 0,
        width: "100%", 
    },
    footerTxt: {
        paddingLeft: "2em",
        color: "white",
    },
    footerIcons: {
        paddingTop: "1em",
         textAlign: "right",
    },
    footerlogo: {
        height: "4em",
        paddingLeft: "0.5em"
    }
   
    
}
