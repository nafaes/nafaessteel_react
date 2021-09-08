import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TranslateIcon from "@material-ui/icons/Translate";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import {
  Button,
  IconButton,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  Badge,
} from "@material-ui/core";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
import { useTranslation } from "react-i18next";

import { userLogout } from "../../context/actions/authActions";
import { CART, ORDERS } from "../../constants/routes";
import { SIGNIN } from "../../constants/routes";
import navbarEngDesk from "../../assets/scss/navbar.module.scss";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";
import { allCategoryItems } from "../../constants/data";
import { GlobalContext } from "../../context/Provider";
import Menus from "./Menus";
import SideDrawer from "./SideDrawer";
import logo from "../../assets/img/Logo.png";

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
  const { isAuthenticated, dispatchAuthActions } = props;
  const englishMobileStyles = navbarEngMobile();
  let classesExternal = navbarEngDesk;
  let classes = englishMobileStyles;
  const { languageChangeHandler, totalCartItems } = useContext(GlobalContext);
  const { t } = useTranslation();

  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
    deferOpenClose: true,
  });

  let history = useHistory();

  const goToContactUs = useCallback(() => {
    history.push("/", {
      message: "from contactus",
    });
  }, [history]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClicklist = () => {
    setOpen(!open);
  };

  const toggleDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, [openDrawer]);

  const [openDrop, setOpenDrop] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenDrop((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenDrop(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenDrop(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(setOpenDrop);

  useEffect(() => {
    if (prevOpen.current === true && openDrop === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openDrop;
  }, [openDrop]);

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
      case "/contactus":
        if (value !== 3) {
          setValue(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const logOutHandler = useCallback((event) => {
    handleClose(event);
    dispatchAuthActions(userLogout());
    history.push(SIGNIN);
  }, [dispatchAuthActions, history]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={clsx(classes.tabContainer, classesExternal.tabContainer)}
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
      >
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          component={Link}
          to="/"
          label={t("Navbar.Home")}
        ></Tab>
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          label="Products"
          {...bindHover(popupState)}
        />
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          component={Link}
          to={ORDERS}
          label={t("Navbar.Orders")}
        ></Tab>
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          component={Button}
          onClick={goToContactUs.bind(null)}
          label={t("Navbar.ContactUS")}
        ></Tab>
      </Tabs>
      <Menus popupState={popupState} allMenus={allCategoryItems} />
    </React.Fragment>
  );

  const popper = (
    <React.Fragment>
      <Popper
        open={openDrop}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={clsx(classes.menudrop, classesExternal.menudrop)}>
              <ClickAwayListener
                onClickAway={(event) => handleClose.bind(null, event)}
              >
                <MenuList
                  autoFocusItem={openDrop}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={clsx(classes.subMenu, classesExternal.subMenu)}
                >
                  {isAuthenticated ? (
                    <MenuItem onClick={logOutHandler}>SignOut</MenuItem>
                  ) : (
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to={SIGNIN}
                    >
                      Sign In
                    </MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
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
      menus={allCategoryItems}
    />
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          className={matchesXs ? classes.appbar : "undefined"}
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
            {matchesXs ? drawer : tabs}
            <IconButton
              className={clsx(classes.iconButton, classesExternal.iconButton)}
              color="inherit"
              ref={anchorRef}
              aria-controls={openDrop ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <AccountCircleIcon size="medium" />
            </IconButton>

            <Tooltip title="Cart" arrow>
              <IconButton
                className={clsx(classes.iconButton, classesExternal.iconButton)}
                color="inherit"
                component={Link}
                to={CART}
              >
                <Badge
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  badgeContent={totalCartItems}
                  // badgeContent={0}
                  showZero={true}
                  // invisible={false}
                  max={999}
                  variant="standard"
                  color="secondary"
                >
                  <ShoppingCart size="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Language" arrow>
              <IconButton
                className={clsx(classes.iconButton, classesExternal.iconButton)}
                color="inherit"
                onClick={languageChangeHandler}
              >
                <TranslateIcon size="medium" />
              </IconButton>
            </Tooltip>
            {popper}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Navbar;
