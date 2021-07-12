import React, { Fragment, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import NestedMenu from 'material-ui-nested-menu-item';
import navbarEngDesk from '../../assets/scss/navbar.module.scss';
import { navbarEngMobile } from '../../assets/jss/viewStyles/navbar/english';
import clsx from "clsx";


import logo from '../../assets/img/Logo.png';
import { Button, IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import withStyles from '@material-ui/core/styles/withStyles';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Menu from 'material-ui-popup-state/HoverMenu';
import {usePopupState,bindHover, bindMenu} from 'material-ui-popup-state/hooks';




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

// const useStyles = makeStyles(theme => ({
  
// }))

const ParentPopupState = React.createContext(null);

const Navbar = (props) => {

  const englishMobileStyles = navbarEngMobile();

  let classesExternal = navbarEngDesk;
  let classes = englishMobileStyles;

  // const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const popupState = usePopupState({
       popupId: 'demoMenu',
       variant: 'popover',
       deferOpenClose: true,
   })
   const popState = usePopupState({
    popupId: 'demoMenu',
    variant: 'popover',
    deferOpenClose: true,
  })

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }
  // value = selectedIndexValue

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget) /*to tell menu where we want to render just clicked the menu */
    setOpenMenu(true)
  }

  const handlemenuItemClick = (event, i) => {
    event.stopPropagation();
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  useEffect(() => {

      if (window.location.pathname === "/" && value !== 0){
        setValue(0);
      }
      else if (window.location.pathname === "/prices" && value !== 1){
        setValue(1);
      }
      else if (window.location.pathname === "/trackyourorder" && value !== 2){
        setValue(2);
      }
      else if (window.location.pathname === "/aboutUs" && value !== 3){
        setValue(3);
      }
      else if (window.location.pathname === "/contactUs" && value !== 4){
        setValue(4);
      }

      switch (window.location.pathname) {
        case "/":
          if (value !== 0)
          {
            setValue(0);
          }
          break;
          case "/prices":
            if (value !== 1){
              setValue(1);
              setSelectedIndex(0);
            }
          break;
          case "/kuwaitiiron":
            if (value !== 2){
              setValue(1);
              setSelectedIndex(1)
            }
          break;       
          case "/ormaniiron":
            if (value !== 2){
              setValue(1);
              setSelectedIndex(2)
            }
          break;
          case "/afganisthaniron":
            if (value !== 2){
              setValue(1);
              setSelectedIndex(3)
            }
          break;
          case "/saudiiron":
            if (value !== 2){
              setValue(1);
              setSelectedIndex(4)
            }
          break;
          case "/trackyourorder":
            if (value !== 2){
              setValue(2);
            }
          break;
          case "/aboutUs":
            if (value !== 3){
              setValue(3);
            }
          break;
          case "/contactUs":
            if (value !== 4){
              setValue(4);
            }
          break;

      }
  }, [value])
const menu = (
  <React.Fragment>
       <Menu {...bindMenu(popState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null} className={classes.menuCls}>
            <MenuItem onClick={popState.close}>Carbon Steel</MenuItem>         
            <MenuItem onClick={popState.close}>Alloy Steel</MenuItem>
            <MenuItem onClick={popState.close}>Tool Steel</MenuItem>
            <Submenu popupId="moreChoicesMenu" title="More Steel" className={classes.subMenu}>
               <MenuItem onClick={popState.close}>Cheesecake</MenuItem>
             <MenuItem onClick={popState.close}>Cheesedeath</MenuItem>
            </Submenu>
        </Menu>
  </React.Fragment>
)
  const tabs = (
    <React.Fragment>
      <Tabs className={classes.tabContainer}
            indicatorColor="secondary"
            onChange={handleChange}
            value={value}
            >
        <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
        <Tab className={classes.tab} component={Link} to="/prices" label="Category" {...bindHover(popupState)}></Tab>
        <Tab className={classes.tab} component={Link} to="/trackyourorder" label="Track Your Order" /*{...bindHover(popState)}*/></Tab>
        <Tab className={classes.tab} component={Link} to="/aboutUs" label="Contact Us"></Tab>
      </Tabs>
      {/* <ParentPopupState.Provider value={popupState}> */}
        <Menu {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          getContentAnchorEl={null} className={classes.menuCls}>
            <Submenu popupId="moreChoicesMenu" title="Iron" className={classes.subMenu}> 
                <MenuItem onClick={popupState.close}>Pure Iron</MenuItem>
                <MenuItem onClick={popupState.close}>Wrought Iron</MenuItem>
                <MenuItem onClick={popupState.close}>Cast Iron</MenuItem>
                <MenuItem onClick={popupState.close}>Pig Iron</MenuItem>
            </Submenu>       
            <MenuItem onClick={popupState.close}>Cement</MenuItem>
            <MenuItem onClick={popupState.close}>Wood</MenuItem>
            <Submenu popupId="moreChoicesMenu" title="Brick" className={classes.subMenu}>
             {/* <Submenu popupId="evenMoreChoicesMenu" title="Even More Choices" className={classes.subMenu}>
                <MenuItem onClick={popupState.close}>Cake (the band)</MenuItem>
                <MenuItem onClick={popupState.close}>Death Metal</MenuItem>
             </Submenu>
            <Submenu popupId="moreBenignChoices" title="More Benign Choices" className={classes.subMenu}>
                <MenuItem onClick={popupState.close}>Salad</MenuItem>
                <MenuItem onClick={popupState.close}>Lobotomy</MenuItem>
            </Submenu> */}
             <MenuItem onClick={popupState.close}>Concrete Brick</MenuItem>
             <MenuItem onClick={popupState.close}>Fly Ash Brick</MenuItem>
         </Submenu>
        </Menu>
        {/* </ParentPopupState.Provider> */}
        {menu}
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
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
            <ListItem onClick={() => {
                  setOpenDrawer(false);
                  setValue(0);
                }} 
                divider 
                button 
                component={Link} 
                to="/" 
                selected={value === 0}
                classes={{selected: classes.drawerItemSelected}}>
              <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem onClick={() => {
                  setOpenDrawer(false);
                  setValue(1);
                }} 
                divider 
                button 
                component={Link} 
                to="/prices" 
                selected={value === 1}
                classes={{selected: classes.drawerItemSelected}}>
              <ListItemText className={classes.drawerItem} disableTypography>Prices</ListItemText>
            </ListItem>
            <ListItem onClick={() => {
                  setOpenDrawer(false);
                  setValue(2);
                }} 
                divider 
                button 
                component={Link} 
                to="/trackyourorder" 
                selected={value === 2}
                classes={{selected: classes.drawerItemSelected}}>
              <ListItemText className={classes.drawerItem} disableTypography>Track Your Order</ListItemText>
            </ListItem>
            <ListItem onClick={() => {
                  setOpenDrawer(false);
                  setValue(3);
                }} 
                divider 
                button 
                component={Link} 
                to="/aboutUs" 
                selected={value === 3}
                classes={{selected: classes.drawerItemSelected}}>
              <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
            </ListItem>
            <ListItem onClick={() => {
                  setOpenDrawer(false);
                  setValue(4);
                }} 
                divider 
                button 
                component={Link} 
                to="/contactUs" 
                selected={value === 4}
                classes={{selected: classes.drawerItemSelected}}>
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
        <AppBar position="fixed" className={classes.appbar}>
          <ToolBar disableGutters>
            <Button component={Link} to="/" onClick={() => setValue(0)} className={classes.logoContainer}>
              <img
                  alt="company logo"
                  className={clsx(classes.logo, classesExternal.logo)}
                  src={logo}
                />
            </Button>
            {matches ? drawer : tabs}
            <Tooltip title="Profile" arrow>
            <IconButton color="inherit">
                <AccountCircleIcon size="medium"/>
            </IconButton>
            </Tooltip>
            <Tooltip title="Cart" arrow>
            <IconButton color="inherit">
               <ShoppingCart size="medium"/>
            </IconButton>
            </Tooltip>
            <Tooltip title="Language" arrow>
            <IconButton color="inherit">
                <TranslateIcon size="medium"/>
            </IconButton>
            </Tooltip> 
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

