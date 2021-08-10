import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const signinMobCommon = {
     formContainer: {  
          width: "60%",
          [theme.breakpoints.down("xs")]:{
               width: "100%"
          },        
     },
     loginContainForm: {
          [theme.breakpoints.down("xs")]:{
               borderTop:"1px solid  rgba(0, 134, 179,0.7) ",
               borderTopStyle: "dotted",
               height: "22em",
               borderLeft: "none",
          },    
     },
     loginImage:{
          [theme.breakpoints.down("xs")]:{
               width: "16em",
               height: "20em",
          },
     },
     notchedOutline: {
          borderColor:"#0086b3 !important",
     },
     formTextfield: {
          "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
               color: "#0086b3 !important",
          },
          "& .MuiOutlinedInput-inputAdornedStart": {
               height:"8px"
          }
     },  
}
