import { createTheme } from "@material-ui/core/styles";
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const addTocartMobCommon = {
  ContainerForm: {
    [theme.breakpoints.down("lg")]: {
      width: "53%",
      padding: "0.50em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "0.50em",
    },
  },

  selectComponentCls: {
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
   
  },

  selectComponentValue: {
    "&:hover": {
      backgroundColor: "#0086b3",
      color: "#fff",
    },
    // "&:focus": {
    //   backgroundColor: "#0086b3",
    //   color: "#fff",
    // },
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
