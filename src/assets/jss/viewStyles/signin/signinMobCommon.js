import { createTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const signinMobCommon = {
  formContainer: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  loginContainForm: {
    [theme.breakpoints.down("xs")]: {    
      height: "22em",
      borderLeft: "none",
      borderRadius: "0px !important "
    },
    // height: "26em",
    borderLeft: "1px solid  rgba(0, 134, 179,0.7)",
    borderLeftStyle: "dotted",
    // backgroundImage: 'url("assets/img/Login-illustration.svg")',
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
  buttonWrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    color: blue[600],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -16,
    marginLeft: -12,
  },
};
