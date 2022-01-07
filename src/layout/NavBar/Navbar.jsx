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
import { Link, useHistory, useLocation } from "react-router-dom";
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
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
import { useTranslation } from "react-i18next";

import Menus from "./Menus";
import SideDrawer from "./SideDrawer";
import { allCategoryItems } from "../../constants/data";
import { GlobalContext } from "../../context/Provider";
import { userLogout } from "../../context/actions/authActions";
import LoginIcon from "@material-ui/icons/ExitToApp";
import LogoutIcon from "@material-ui/icons/Lock";
import {
  ADDTOCART,
  CART,
  GUESTTRACKORDER,
  ITEMS,
  ORDERS,
  SIGNIN,
} from "../../constants/routes";
import logo from "../../assets/img/Nafaeslogonew.png";
import navbarEngDesk from "../../assets/scss/navbar.module.scss";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";

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

const Navbar = () => {
  const englishMobileStyles = navbarEngMobile();
  let classesExternal = navbarEngDesk;
  let classes = englishMobileStyles;
  const {
    userState: { isAuthenticated, userName },
    cartState: { totalItems },
    languageChangeHandler,
    dispatchAuthActions,
  } = useContext(GlobalContext);
  const { t } = useTranslation();

  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState();
  const [open, setOpen] = React.useState(false);

  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
    deferOpenClose: true,
  });

  const history = useHistory();
  const location = useLocation();

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
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case ITEMS:
      case ADDTOCART:
        setValue(1);
        break;
      case GUESTTRACKORDER:
      case ORDERS:
        setValue(2);
        break;
      default:
        setValue();
        break;
    }
  }, [location.pathname]);

  const logOutHandler = useCallback(
    (event) => {
      console.log("userLogout");
      handleClose(event);
      dispatchAuthActions(userLogout());
    },
    [dispatchAuthActions]
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        className={clsx(classes.tabContainer, classesExternal.tabContainer)}
        indicatorColor="secondary"
        onChange={handleChange}
        value={value ?? false}
      >
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          component={Link}
          to="/"
          label={t("Navbar.Home")}
          tabIndex={0}
        />
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          label={t("Navbar.Products")}
          tabIndex={1}
          {...bindHover(popupState)}
        />

        {isAuthenticated ? (
          <Tab
            className={clsx(classes.tab, classesExternal.tab)}
            component={Link}
            to={ORDERS}
            tabIndex={2}
            label={t("Navbar.Orders")}
          />
        ) : (
          <Tab
            className={clsx(classes.tab, classesExternal.tab)}
            component={Link}
            to={GUESTTRACKORDER}
            tabIndex={2}
            label={t("Navbar.TrackOrder")}
          />
        )}
        <Tab
          className={clsx(classes.tab, classesExternal.tab)}
          component={Button}
          onClick={goToContactUs.bind(null)}
          label={t("Navbar.ContactUS")}
        />
      </Tabs>
      <Menus popupState={popupState} allMenus={allCategoryItems} />
    </React.Fragment>
  );

  const popper = (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClose}>
        {/* // onClickAway={(event) => handleClose.bind(null, event)} > */}
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
              <Paper
                className={clsx(classes.menudrop, classesExternal.menudrop)}
              >
                <MenuList
                  autoFocusItem={openDrop}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={clsx(
                    classes.menuPopper,
                    classesExternal.menuPopper
                  )}
                >
                  {isAuthenticated ? (
                    <MenuItem onClick={logOutHandler}>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <LogoutIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText>{t("Navbar.SignOut")}</ListItemText>
                    </MenuItem>
                  ) : (
                    [
                      <MenuItem
                        key="SignIn"
                        onClick={handleClose}
                        component={Link}
                        to={{
                          pathname: SIGNIN,
                          state: { previousPath: location.pathname },
                        }}
                      >
                        <ListItemIcon style={{ minWidth: "35px" }}>
                          <LoginIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                          {t("SignIn.InputFields.SignIn")}
                        </ListItemText>
                      </MenuItem>,
                    ]
                  )}
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ClickAwayListener>
    </React.Fragment>
  );

  const drawer = (
    <SideDrawer
      goToContactUs={goToContactUs}
      openDrawer={openDrawer}
      toggleDrawer={toggleDrawer}
      value={value}
      setValue={setValue}
      open={open}
      handleClicklist={handleClicklist}
      menus={allCategoryItems}
      isAuthenticated={isAuthenticated}
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
            {userName ? (
              <Typography variant="subtitle1">{userName}</Typography>
            ) : null}
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
                  badgeContent={totalItems}
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
