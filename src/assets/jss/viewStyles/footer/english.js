import { makeStyles } from "@material-ui/core";
import { footerMobCommon } from "./footerCommon";

export const footerMobEng = makeStyles((theme) => ({
     ...footerMobCommon,
     footerIcons: footerMobCommon.footerIcons,
}));