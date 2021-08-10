import { createTheme } from '@material-ui/core/styles'
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

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
