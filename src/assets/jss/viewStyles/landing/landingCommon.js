import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const landingMobCommon = {
    contactContent: {
        flexWrap: "noWrap" , 
        padding: "25px 0px"
      },
      contactContainer: {
        background: "linear-gradient(90deg, rgba(0, 134, 179,.7), rgba(0, 134, 179,.7))",
        marginBottom: "30px",
         borderRadius: "2em",
      },
      contactHeader:{
          border: "1px solid white",
          marginTop: "2rem",
          padding: "10px 30px",
          borderRadius: "3em",
          fontSize: "1.2rem",
          color: "white",
      } ,
      aboutContent: {
        padding: "25px",
        color: "white"
      },
      info: {
        fontSize: "1rem",
        color: "white"
      },
      root: {
            maxWidth: 300,
            transition: "transform 0.15s ease-in-out",
            borderRadius: "1.5em",
      }
}
