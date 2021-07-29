import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const addTocartMobCommon = {

    ContainerForm: {
        [theme.breakpoints.down("md")]: {
          width: "60%",
          padding: "0.50em",
        },
        [theme.breakpoints.down("xs")]: {
          width: "96%",
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
        }
    },

    addCartTabFtrRow: {
        "& .MuiTableCell-root": {
            borderBottom: "none"
        }
    }

};