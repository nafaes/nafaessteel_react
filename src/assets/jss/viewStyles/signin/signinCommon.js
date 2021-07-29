import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const signinMobCommon = {
    loginContainer:{
        width:"60%",
        margin:"5em auto 5em auto",
        backgroundColor: "#fff",
        borderRadius:"0.5em"
    },
    loginImage: {
        height:"25em",
        width: "20em",
    },
    loginContainForm: {

        borderLeft:"1px solid  rgba(0, 134, 179,0.7) ",
        borderLeftStyle: "dotted",
        height: "26em",
    },
    notchedOutline: {
        borderColor:"#0086b3 !important",
     },
    loginTextfield:{
        width:"18em",
        marginBottom:"0.5em",
        
        "&  .MuiOutlinedInput-notchedOutline":{
            border: "1px solid #0086b3"
        },
        "& .MuiInputLabel-outlined.MuiInputLabel-shrink":{
            color: "#0086b3"
        },
        "& .MuiOutlinedInput-root, .Mui-focused ":{
            borderColor:"#0086b3",
            borderWidth: "2px",
            height: "3em"
        },
        
    },
    signInBtn:{
        textTransform:"none",
         width:"19em",
         backgroundColor:theme.palette.common.blue,
         color: "white", 
         fontWeight: "lighter",
         fontSize:"0.9rem",
         borderRadius:"10em",
         padding:"3px",
         marginBottom:"0.5em",
         "&:hover":{
            backgroundColor: theme.palette.common.blue,
         }
    },
     "& .MuiButton-root:hover":{
         backgroundColor: theme.palette.common.blue,
     }

  
}
