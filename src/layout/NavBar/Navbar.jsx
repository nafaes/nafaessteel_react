import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from "@material-ui/icons/Translate";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import navbarEngDesk from "../../assets/scss/navbar.module.scss";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";
import clsx from "clsx";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Button, IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";

import Menus from "./Menus";
import logo from "../../assets/img/Logo.png";
import { CART } from "../../constants/routes";
import { allCategoryItems } from "../../constants/data";
import SideDrawer from "./SideDrawer";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const englishMobileStyles = navbarEngMobile();

  let classesExternal = navbarEngDesk;
  let classes = englishMobileStyles;

  // const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
    deferOpenClose: true,
  });

  let history = useHistory();

  const goToContactUs = () => {
    history.push("/", {
      message: "go to Contactus",
    });
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClicklist = () => {
    setOpen(!open);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/category" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/trackorder" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contactUs" && value !== 3) {
      setValue(3);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/category":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/trackorder":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/contactUs":
        if (value !== 3) {
          setValue(3);
        }
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
        <Tab
          className={classes.tab}
          label="Category"
          {...bindHover(popupState)}
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/signin"
          label="Track Order" /*{...bindHover(popState)}*/
        ></Tab>

        {/* <Tab
          className={classes.tab}
          component={Link}
          // to="/"
          to={{
            pathname: "/",
            state: { message: "go to Contactus" },
          }}
          label="Contact Us"
        ></Tab> */}

        <Tab
          className={classes.tab}
          component={Button}
          onClick={() => {
            goToContactUs();
          }}
          label="Contact Us"
        />
      </Tabs>

      <Menus popupState={popupState} allMenus={allCategoryItems} />
    </React.Fragment>
  );

  const drawer = (
    <SideDrawer
      openDrawer={openDrawer}
      toggleDrawer={toggleDrawer}
      value={value}
      setValue={setValue}
      open={open}
      handleClicklist={handleClicklist}
      allMenus={allCategoryItems}
    />
  );

  // const drawer = (
  //   <React.Fragment>
  //     <SwipeableDrawer
  //       disableBackdropTransition={!iOS}
  //       disableDiscovery={iOS}
  //       open={openDrawer}
  //       onClose={() => setOpenDrawer(false)}
  //       onOpen={() => setOpenDrawer(true)}
  //       classes={{ paper: classes.drawer }}
  //     >
  //       <div className={classes.toolbarMargin} />
  //       <List disablePadding component="nav">
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(0);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to="/"
  //           selected={value === 0}
  //           classes={{ selected: classes.drawerItemSelected }}
  //         >
  //           <ListItemText className={classes.drawerItem} disableTypography>
  //             Home
  //           </ListItemText>
  //         </ListItem>
  //         <ListItem button onClick={handleClicklist} divider>
  //           <ListItemText className={classes.drawerItem}>Category</ListItemText>
  //           {open ? (
  //             <ExpandLess style={{ color: "white" }} />
  //           ) : (
  //             <ExpandMore style={{ color: "white" }} />
  //           )}
  //         </ListItem>
  //         <Collapse in={open} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItem button divider>
  //               <ListItemText className={classes.drawerItem}>Iron</ListItemText>
  //             </ListItem>
  //             <ListItem button divider>
  //               <ListItemText className={classes.drawerItem}>
  //                 Cement
  //               </ListItemText>
  //             </ListItem>
  //             <ListItem button divider>
  //               <ListItemText className={classes.drawerItem}>Wood</ListItemText>
  //             </ListItem>
  //             <ListItem button divider>
  //               <ListItemText className={classes.drawerItem}>
  //                 Brick
  //               </ListItemText>
  //             </ListItem>
  //           </List>
  //         </Collapse>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(2);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to="/trackorder"
  //           selected={value === 2}
  //           classes={{ selected: classes.drawerItemSelected }}
  //         >
  //           <ListItemText className={classes.drawerItem} disableTypography>
  //             Track Order
  //           </ListItemText>
  //         </ListItem>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(3);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to="/contactUs"
  //           selected={value === 3}
  //           classes={{ selected: classes.drawerItemSelected }}
  //         >
  //           <ListItemText className={classes.drawerItem} disableTypography>
  //             Contact Us
  //           </ListItemText>
  //         </ListItem>
  //       </List>
  //     </SwipeableDrawer>
  //     <IconButton
  //       color="inherit"
  //       className={classes.drawerIconContainer}
  //       onClick={() => setOpenDrawer(!openDrawer)}
  //       disableRipple
  //     >
  //       <MenuIcon className={classes.drawerIcon} />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          className={matchesMd ? classes.appbar : "undefined"}
        >
          <ToolBar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={clsx(
                classes.logoContainer,
                classesExternal.logoContainer
              )}
            >
              <img
                alt="company logo"
                className={clsx(classes.logo, classesExternal.logo)}
                src={logo}
              />
            </Button>
            {matchesMd ? drawer : tabs}
            <Tooltip title="Profile" arrow>
              <IconButton color="inherit">
                <AccountCircleIcon size="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart" arrow>
              <IconButton color="inherit" component={Link} to={CART}>
                <ShoppingCart size="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Language" arrow>
              <IconButton color="inherit">
                <TranslateIcon size="medium" />
              </IconButton>
            </Tooltip>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Navbar;
