import { createTheme } from "@material-ui/core/styles";
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const signupMobCommon = {
  formContainer: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  signupContainForm: {
    [theme.breakpoints.down("xs")]: {
      borderTop: "1px solid  rgba(0, 134, 179,0.7) ",
      borderTopStyle: "dotted",
      height: "22em",
      borderLeft: "none",
    },
    height: "38em",
    borderLeft: "1px solid  rgba(0, 134, 179,0.7)",
    borderLeftStyle: "dotted",
  },
  loginImage: {
    [theme.breakpoints.down("xs")]: {
      width: "16em",
      height: "20em",
    },
  },
  notchedOutline: {
    borderColor: "#0086b3 !important",
  },
  formTextfield: {
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#0086b3 !important",
    },
    "& .MuiOutlinedInput-inputAdornedStart": {
      height: "8px",
    },
  },
};
