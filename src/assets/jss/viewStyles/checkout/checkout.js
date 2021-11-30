import { makeStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";

const checkoutStyles = makeStyles((theme) => ({
  // signupContainForm:{
  //   height: "20em"
  // },
  checkoutRoot: {
    flexGrow: 1,
    // width: "55%",
    marginTop: "2em",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
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
  otpInput:{
    width: "20%",
    margin:"0px auto",
    "& .MuiInputBase-input":{
      textAlign:"center",
    }
  },
  inputStyle: {
  width: "1.5rem !important",
  height: "1.5rem",
  fontSize: "0.85rem",
  borderRadius: "4px",
  border: "0.8px solid rgba(0, 0, 0, 1)",
 },

  paymentRadioBtns: {
    background: 'linear-gradient(45deg, #0086b3 30%, #51a8c4 90%)',
    color: "#fff",
    padding: "0px .8em",
    borderRadius: "1em",
    marginLeft: ".5em",
  },
  

  checkNextButtonGridItem: {
    margin: "1em auto",
    borderRadius: "5em",
    width: "40%",
    padding: ".1em 0px",
  },

  checkNextButton: {
    // fontSize: "0.95rem",
    // fontWeight: "600",
    // color: "#fff",
    // marginTop: "1em",
    // borderRadius: "1em",
    // width: "100%",
    // padding: ".1em 0px",
    background: "rgba(0, 134, 179, 0.8)",
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#fff",
    "&:hover": {
      background: "rgba(0, 134, 179, 0.8)",
    },
  },

  buttonWrapper: {
    // margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    color: blue[600],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -14,
    marginLeft: -12,
  },
}));

export default checkoutStyles;
