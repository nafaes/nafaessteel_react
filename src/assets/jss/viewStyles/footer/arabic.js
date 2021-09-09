import { makeStyles } from "@material-ui/core";
import { footerMobCommon } from "./footerCommon";

export const footerMobileAr = makeStyles((theme) => ({
  ...footerMobCommon,
  footerIconsContainer: {
    ...footerMobCommon.footerIconsContainer,
    [theme.breakpoints.down("xs")]: {
      "& .MuiIconButton-root": {
        padding: "6px",
      },
    },
  },
}));
