import { createMuiTheme } from "@material-ui/core";
import { appTheme } from "../../../theme/theme";

const theme = createMuiTheme(appTheme());

export const navbarMobCommon = {

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1.0em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "0.6em",
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "1.15em",
        },
      },
      logo: {
       
        [theme.breakpoints.down("xs")]: {
            height: "5em",
          },
      },
      logoContainer: {
        // padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        }
      },
      tabContainer: {
        margin: "0px auto",
      },
      tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
      },
      menuCls: {
        textAlign: "left",

        // backgroundColor: theme.palette.common.blue,    
        "& .MuiMenu-paper":{
          backgroundColor: theme.palette.common.blue,
          color: "white",
          borderRadius: "0px",
          marginRight: "10px",
          marginTop: "-2.5px"
          // padding: "0px 30px"

        },
        "& .MuiListItem-root": {
            padding: "8px 45px",
        },
        "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover":{
          color: "yellow",
        }
      },
      subMenu: {
        "&:hover": {
          opacity: 1, 
        },
        "& .MuiMenu-paper":{
          backgroundColor: theme.palette.common.blue,
          color: "white",
          borderRadius: "0px",
          marginLeft: "1px",
          marginTop: "5px",
        },
        "& .MuiListItem-root": {
          padding: "8px 30px",
      },
        "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover":{
          color: "yellow",
        }
      }, 
      drawerIconContainer: {
        "&:hover": {
          backgroundColor: "transparent"
        },
        position: "absolute",
      },
      drawerIcon: {
        height: "35px",
        width: "35px",
      },
      drawer: {
        backgroundColor: theme.palette.common.blue,
        width: "240px",
      },
      drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
    
      },
      drawerItemSelected: {
          "& .MuiListItemText-root":{
            opacity: 1,
          }  
      },
      appbar: {
        zIndex: theme.zIndex.modal + 1
      }
}
