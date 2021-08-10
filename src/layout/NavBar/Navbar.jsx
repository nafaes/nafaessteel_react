import React, { Fragment, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import * as Scroll from 'react-scroll';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import navbarEngDesk from '../../assets/scss/navbar.module.scss';
import { navbarEngMobile } from '../../assets/jss/viewStyles/navbar/english';
import clsx from "clsx";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Button, IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import withStyles from '@material-ui/core/styles/withStyles';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Menu from 'material-ui-popup-state/HoverMenu';
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks';

import logo from '../../assets/img/Logo.png';
import { CART, TRACKORDER } from '../../constants/routes';
import { SIGNIN } from '../../constants/routes';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import MenuList from '@material-ui/core/MenuList';
import {Link} from 'react-router-dom';

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

const ParentPopupState = React.createContext(null);

const Navbar = (props) => {

  const englishMobileStyles = navbarEngMobile();

  let classesExternal = navbarEngDesk;
  let classes = englishMobileStyles;

  // const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));



  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0)
  
  const [open, setOpen] = React.useState(false);

  const popupState = usePopupState({
    popupId: 'demoMenu',
    variant: 'popover',
    deferOpenClose: true,
  })


  const handleChange = (e, newValue) => {
    setValue(newValue);
  }
  // value = selectedIndexValue

  const handleClicklist = () => {
    setOpen(!open);
  };
  

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
    if (event.key === 'Tab') {
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

    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    }
    else if (window.location.pathname === "/category" && value !== 1) {
      setValue(1);
    }
    else if (window.location.pathname === "/trackorder" && value !== 2) {
      setValue(2);
    }
    else if (window.location.pathname === "/contactus" && value !== 3) {
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
  }, [value,openDrop])
 
  const tabs = (
    <React.Fragment>
      <Tabs className={clsx(classes.tabContainer,classesExternal.tabContainer)}
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
      >
        {/* <Scroll to="contact-destination" 
                spy={true} 
                smooth={true} 
                duration={500} > */}
          <Tab className={clsx(classes.tab,classesExternal.tab)} component={Link} to="/" label="Home"></Tab>
          <Tab className={clsx(classes.tab,classesExternal.tab)} component={Link} to="/category" label="Category" {...bindHover(popupState)}></Tab>
          <Tab className={clsx(classes.tab,classesExternal.tab)} component={Link} to={TRACKORDER} label="Track Order" /*{...bindHover(popState)}*/></Tab>
          {/* <Scroll.Link  className={clsx(classes.tab,classesExternal.tab)} to="contactus" spy={true} smooth={true}>ContactUs</Scroll.Link> */}
          <Tab className={clsx(classes.tab,classesExternal.tab)} component={Link} to="/contactUs" label="Contact Us"></Tab>

        {/* </Scroll> */}
       

      </Tabs>
      <Menu {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null} className={classes.menuCls}
        disableScrollLock={true}
        >
        <Submenu popupId="moreChoicesMenu" title="Iron" className={clsx(classes.subMenu,classesExternal.subMenu)}>
          <MenuItem onClick={popupState.close}>Pure Iron</MenuItem>
          <MenuItem onClick={popupState.close}>Wrought Iron</MenuItem>
          <MenuItem onClick={popupState.close}>Cast Iron</MenuItem>
          <MenuItem onClick={popupState.close}>Pig Iron</MenuItem>
        </Submenu>
        <MenuItem onClick={popupState.close}>Cement</MenuItem>
        <MenuItem onClick={popupState.close}>Wood</MenuItem>
        <Submenu popupId="moreChoicesMenu" title="Brick" className={clsx(classes.subMenu,classesExternal.subMenu)}>
        
          <MenuItem onClick={popupState.close}>Concrete Brick</MenuItem>
          <MenuItem onClick={popupState.close}>Fly Ash Brick</MenuItem>
        </Submenu>
      </Menu>
    </React.Fragment>

  )

  const popper = (
    <React.Fragment>
      <Popper open={openDrop} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={clsx(classes.menudrop, classesExternal.menudrop)}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={openDrop} id="menu-list-grow" onKeyDown={handleListKeyDown} className={clsx(classes.subMenu,classesExternal.subMenu)}>
                    <MenuItem onClick={handleClose} component={Link} to={SIGNIN}>Sign In</MenuItem>
                    <MenuItem onClick={handleClose}>SignOut</MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() =>
          setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}>
        <div className={classes.toolbarMargin} />
        <List disablePadding component="nav" >
          <ListItem onClick={() => {
            setOpenDrawer(false);
            setValue(0);
          }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            classes={{ selected: classes.drawerItemSelected }}>
            <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClicklist} divider>
            <ListItemText className={classes.drawerItem}>Category</ListItemText>
            {open ? <ExpandLess style={{ color: "white" }} /> : <ExpandMore style={{ color: "white" }} />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button divider>
                <ListItemText className={classes.drawerItem}>Iron</ListItemText>
              </ListItem>
              <ListItem button divider>
                <ListItemText className={classes.drawerItem}>Cement</ListItemText>
              </ListItem>
              <ListItem button divider>
                <ListItemText className={classes.drawerItem}>Wood</ListItemText>
              </ListItem>
              <ListItem button divider>
                <ListItemText className={classes.drawerItem}>Brick</ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem onClick={() => {
            setOpenDrawer(false);
            setValue(2);
          }}
            divider button component={Link} to="/trackorder" selected={value === 2}
            classes={{ selected: classes.drawerItemSelected }}>
            <ListItemText className={classes.drawerItem} disableTypography>Track Order</ListItemText>
          </ListItem>
          <ListItem onClick={() => {
            setOpenDrawer(false);
            setValue(3);
          }}
            divider
            button
            component={Link}
            to="/contactUs"
            selected={value === 3}
            classes={{ selected: classes.drawerItemSelected }}>
            <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton color="inherit" className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={matchesXs ? classes.appbar : "undefined"}>
          <ToolBar disableGutters>
            <Button component={Link} to="/" onClick={() => setValue(0)} className={clsx(classes.logoContainer, classesExternal.logoContainer)}>
              <img
                alt="company logo"
                className={clsx(classes.logo, classesExternal.logo)}
                src={logo}
              />
            </Button>
            {matchesXs ? drawer : tabs}
              <IconButton className={clsx(classes.iconButton,classesExternal.iconButton)} color="inherit"   ref={anchorRef}
                          aria-controls={openDrop ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}>
                <AccountCircleIcon size="medium" />
              </IconButton>
            <Tooltip title="Cart" arrow>
              <IconButton className={clsx(classes.iconButton,classesExternal.iconButton)} color="inherit" component={Link} to={CART}>
                <ShoppingCart size="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Language" arrow>
              <IconButton className={clsx(classes.iconButton,classesExternal.iconButton)} color="inherit">
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
}

export default Navbar;

const submenuStyles = (theme) => ({
  menu: {
    marginTop: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
})

const Submenu = withStyles(submenuStyles)(
  // Unfortunately, MUI <Menu> injects refs into its children, which causes a
  // warning in some cases unless we use forwardRef here.
  React.forwardRef(({ classes, title, popupId, children, ...props }, ref) => {
    const parentPopupState = React.useContext(ParentPopupState)
    const popupState = usePopupState({
      popupId,
      variant: 'popover',
      parentPopupState,
      deferOpenClose: true,
    })
    return (
      <ParentPopupState.Provider value={popupState}>
        <MenuItem
          {...bindHover(popupState)}
          selected={popupState.isOpen}
          ref={ref}
        >
          <span className={classes.title}>{title}</span>
          <ChevronRight className={classes.moreArrow} />
        </MenuItem>
        <Menu
          {...bindMenu(popupState)}
          classes={{ paper: classes.menu }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null}
          {...props}
        >
          {children}
        </Menu>
      </ParentPopupState.Provider>
    )
  })
)

