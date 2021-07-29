import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const footerMobCommon = {
    footerContainer:{
         backgroundColor: theme.palette.common.blue,
     },
     footerIconsContainer:{
        "& .MuiIconButton-root": {
            padding: "10px",
        },
     },
     footerTxt: {
        fontSize: ".70em"
    },
    footerIcons:{
        fontSize: "1em"
    }
}
