import { createTheme } from "@material-ui/core/styles";
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const addTocartMobCommon = {
 
  addToCartContainer: {
    [theme.breakpoints.down("xs")]: {
      width:"97% !important",
    },
    
    margin: "0px auto",
  },
  breadcrumTab: {
    // [theme.breakpoints.down("xs")]: {
    //   width: "99.5% !important",     
    // },
    color: "#fff",
    background: "linear-gradient(45deg, rgb(5 121 163) 40%, rgb(143, 193, 210) 90%)",
    padding: ".5em",   
    borderTopLeftRadius: "1em",
    borderTopRightRadius: "1em",
    margin: "4em auto 0 auto",
  },
  addToCartImg:{
    [theme.breakpoints.down("xs")]: {
      width: "50% !important", 
      margin: "1em auto 1em !important", 
    },
    
    borderRadius: "50%" 
  },
  flexDirect:{
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column !important",     
    },
    justifyContent:"center",
 
   
  },
  selectComponentCls: { 
    minHeight: "4.5em",
    "& .MuiInput-underline:before":{
      borderColor: "#fff !important",
    },
    "& .MuiInput-underline:after":{
      borderColor: "#fff !important",
    },   
    "& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused": {
      borderColor: "#fff !important",
    },
    "& .MuiSelect-icon": {
      color: "#fff !important",
    },
    "& .MuiFormLabel-root": {
      color: "#fff !important",
    },
    "& .MuiInputBase-input": {
      color: "#fff !important",
    },
    "& .MuiOutlinedInput-input": {
        padding:"15px",
    },
   "& .MuiFormHelperText-root":{
    color:"rgba(255,0,0,1)",
   
     }   
  },
  selectCls: {
      "& .MuiFormHelperText-root":{
        minHeight:"4.5em"
      },
      "& .MuiSelect-icon": {
        color: "#fff !important",
      },
      "&.MuiInput-underline:before": {
        borderBottom: "1px solid white"
      },
      "&.MuiInput-underline:after": {
        borderBottom: "1px solid white"
      },
      "&.MuiInput-underline:hover:before": {
        borderBottom: "2px solid white"
    },
  },
  selectComponentValue: {
    "&:hover": {
      backgroundColor: "#0086b3",
      color: "#fff",
    },
   
    "&:focus": {
        "&:hover":{
        backgroundColor: "#0086b3",
        color: "#fff",
      },
    }
  },

  addCartTabFtrRow: {
    "& .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
};
