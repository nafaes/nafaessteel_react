import { createTheme } from "@material-ui/core/styles";
import { appTheme } from "../../../theme/theme";

const theme = createTheme(appTheme());

export const navbarMobCommon = {
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1.0em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "0.6em",
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "0.7em",
        },
      },
     
      logoContainer: {
             [theme.breakpoints.down("xs")]: {
                  margin: "auto",
             },
             [theme.breakpoints.down("md")]: {
                  margin: "auto",
             },
        },
        logo: {
             [theme.breakpoints.down("xs")]: {
                  marginLeft: "9em",
                  height: "4em"
             },
             [theme.breakpoints.down("md")]: {
                  marginLeft: "9em",
                  height: "4em"
             },
            
        },
      tabContainer: {
        margin: "0px auto",
      },
      tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        color:"#fff",
        "& .MuiButton-root": {
          color:"#fff",
        }
      },
      menuCls: {
        textAlign: "left",
    
        "& .MuiMenu-paper":{
          backgroundColor: theme.palette.common.blue,
          color: "white",
          borderRadius: "0px",
          marginRight: "10px",
          marginTop: "-2.5px"
        },
        "& .MuiListItem-root": {
            padding: "8px 45px",
        },
        "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover":{
          color: "yellow",
        }
      },
      menudrop:{
        backgroundColor: theme.palette.common.blue,
        color: "white"
      },
      menuPopper: {
        "& .MuiListItem-root": {
          padding: "2px 15px",
        },
       
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
      iconButton:{
        [theme.breakpoints.down("xs")]: {
           padding: "5px",
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
        width:"40%",
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
