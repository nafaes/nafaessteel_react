// import { createMuiTheme } from '@material-ui/core/styles';

const arcGrey = "#ffffff";
const arcBlue = "#0086b3";

export const appTheme = () => {
    return {
       palette: {
        common: {
            grey: `${arcGrey}`,
            blue: `${arcBlue}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcGrey}`,
        } 
    },
      typography: {
        tab: {
            textTransform: "none",
          fontWeight: 100,
          fontSize: "1rem", 
          color: "white",       
       },
      },
    };
  };

// export default createMuiTheme({
//     palette: {
//         common: {
//             grey: `${arcGrey}`,
//             blue: `${arcBlue}`,
//         },
//         primary: {
//             main: `${arcBlue}`,
//         },
//         secondary: {
//             main: `${arcGrey}`,
//         } 
//     },
//     typography: {
//         tab: {
//           textTransform: "none",
//           fontWeight: 100,
//           fontSize: "1rem", 
//           color: "white",       
//         }
//     }

// });



// import React, { Fragment, useState, useEffect } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import ToolBar from '@material-ui/core/Toolbar';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import { makeStyles } from '@material-ui/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { Link } from 'react-router-dom';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import MenuIcon from '@material-ui/icons/Menu';
// import TranslateIcon from '@material-ui/icons/Translate';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';

// import logo from '../../assets/img/Logo.png';
// import { Button, IconButton } from '@material-ui/core';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// const useStyles = makeStyles(theme => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: "0.6em",
//     [theme.breakpoints.down("md")]: {
//       marginBottom: "0.6em",
//     },
//     [theme.breakpoints.down("xs")]: {
//       marginBottom: "1.15em",
//     },
//   },
//   logo: {
//     height: "5em",
//   },
//   logoContainer: {
//     // padding: 0,
//     "&:hover": {
//       backgroundColor: "transparent",
//     }
//   },
//   tabContainer: {
//     margin: "0px auto",
//   },
//   tab: {
//     ...theme.typography.tab,
//     minWidth: 10,
//     marginLeft: "25px",
//   },
//   menu: {
//     backgroundColor: theme.palette.common.blue,
//     color: "white",
//     borderRadius: "0px",
//   },
//   menuItem: {
//     ...theme.typography.tab,
//     opacity: 0.7,
//     "&:hover": {
//       opacity: 1,
      
//     }
//   },
//   drawerIconContainer: {
//     marginLeft: "auto",
//     "&:hover": {
//       backgroundColor: "transparent"
//     }
//   },
//   drawerIcon: {
//     height: "35px",
//     width: "35px",
//   },
//   drawer: {
//     backgroundColor: theme.palette.common.blue,
//   },
//   drawerItem: {
//     ...theme.typography.tab,
//     color: "white",
//     opacity: 0.7,

//   },
//   drawerItemSelected: {
//       "& .MuiListItemText-root":{
//         opacity: 1,
//       }  
//   },
//   appbar: {
//     zIndex: theme.zIndex.modal + 1
//   }
// }))

// const Navbar = (props) => {

//   const classes = useStyles();
//   const theme = useTheme();
//   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [value, setValue] = useState(0)
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openMenu, setOpenMenu] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleChange = (e, newValue) => {
//     setValue(newValue);
//   }
//   // value = selectedIndexValue

//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget) /*to tell menu where we want to render just clicked the menu */
//     setOpenMenu(true)
//   }

//   const handlemenuItemClick = (e, i) => {
//     setAnchorEl(null);
//     setOpenMenu(false);
//     setSelectedIndex(i)
//   }

//   const handleClose = (e) => {
//     setAnchorEl(null)
//     setOpenMenu(false)
//   }


//   const menuOptions = [
//     { name: "Prices", link: "/prices", activeIndex: 1, selectedIndex: 0}, 
//     { name: "Kuwaiti Iron", link: "/kuwaitiiron", activeIndex: 1, selectedIndex: 1 },
//     { name: "Ormani Iron", link: "/ormaniiron", activeIndex: 1, selectedIndex: 2 }, 
//     { name: "Afganisthan Iron", link: "/afganisthaniron", activeIndex: 1, selectedIndex: 3 },
//     { name: "Saudi Iron", link: "/saudiiron", activeIndex: 1, selectedIndex: 4 }]

//   const routes = [
//     { name: "Home", link: "/", activeIndex: 0 },
//     { name: "Prices", link: "/prices", activeIndex: 1,ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopUp:anchorEl ? "true" : undefined, onMouseOver:event => handleClick(event)},
//     { name: "Track Your Order", link: "/trackyourorder", activeIndex: 2 },
//     { name: "AboutUs", link: "/aboutUs", activeIndex: 3 },
//     { name: "Contact Us", link: "/contactUs", activeIndex: 4 }]

//   useEffect(() => {
//     [...menuOptions, ...routes].forEach(route => {
//       switch (window.location.pathname) {
//         case `${route.link}`:
//           if (value !== route.activeIndex) {
//             setValue(route.activeIndex)
//             if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
//               setSelectedIndex(route.selectedIndex)
//             }
//           }
//           break;
//         default:
//           break;
//       }

//     })
//   }, [value, menuOptions, routes, selectedIndex])

//   const tabs = (
//     <React.Fragment>
//       <Tabs 
//         value={value}
//         className={classes.tabContainer}
//         onChange={handleChange}
//         indicatorColor="secondary">
//           {routes.map((route, index) => (
//             <Tab 
//             className={classes.tab}
//             key={route.name}
//             component={Link}
//             to={route.link}
//             label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopUp} onMouseOver={route.onMouseOver}/>
//           ))}
//       </Tabs>
//       <Menu id="simple-menu"
//         anchorEl={anchorEl}
//         open={openMenu}
//         onClose={handleClose}
//         classes={{ paper: classes.menu }}
//         MenuListProps={{ onMouseLeave: handleClose }}
//         elevation={0}
//         style={{zIndex: 1302}}
//         keepMounted>
//             {menuOptions.map((option, i) => (
//               <MenuItem key={option.name}
//                 component={Link}
//                 to={option.link}
//                 classes={{ root: classes.menuItem }}
//                 onClick={(event) => {
//                   handlemenuItemClick(event, i);
//                   setValue(1);
//                   handleClose();
//                 }}
//                 selected={i === selectedIndex && value === 1}>
//                 {option.name}
//               </MenuItem>
//             ))}
//       </Menu>
//     </React.Fragment>
//   )

//   const drawer = (
//     <React.Fragment>
//       <SwipeableDrawer disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         open={openDrawer}
//         onClose={() =>
//           setOpenDrawer(false)}
//         onOpen={() => setOpenDrawer(true)}
//         classes={{ paper: classes.drawer }}>
//         <div className={classes.toolbarMargin}/>
//         <List disablePadding>
//             {routes.map(route => (
//               <ListItem divider 
//                   key={`${route}${route.activeIndex}`}
//                   button 
//                   component={Link} 
//                   to={route.link} 
//                   selected={value === route.activeIndex} 
//                   classes={{selected: classes.drawerItemSelected}}
//                   onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}>
//                   <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
//               </ListItem>
//             ))}
//         </List>
//       </SwipeableDrawer>
//       <IconButton color="inherit" className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
//         <MenuIcon className={classes.drawerIcon} />
//       </IconButton>
//     </React.Fragment>
//   )

//   return (
//     <Fragment>
//       <ElevationScroll>
//         <AppBar position="fixed" className={classes.appbar}>
//           <ToolBar disableGutters>
//             <Button component={Link} to="/" onClick={() => setValue(0)} className={classes.logoContainer}>
//               <img alt="Logo" src={logo} className={classes.logo} />
//             </Button>
//             {matches ? drawer : tabs}
//             <IconButton color="inherit">
//                <ShoppingCart fontSize="large"></ShoppingCart>
//             </IconButton>
//             <IconButton color="inherit">
//                 <TranslateIcon fontSize="large"></TranslateIcon>
//             </IconButton>
//           </ToolBar>
//         </AppBar>
//       </ElevationScroll>
//       <div className={classes.toolbarMargin} />
//     </Fragment>
//   );
// }

// export default Navbar;