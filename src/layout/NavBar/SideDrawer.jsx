import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Button, IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import navbarEngDesk from "../../assets/scss/navbar.module.scss";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";

import Menus from "./Menus";
import logo from "../../assets/img/Logo.png";
import { CART } from "../../constants/routes";
import { allCategoryItems } from "../../constants/data";

const SideDrawer = (props) => {
  const {
    openDrawer,
    toggleDrawer,
    value,
    setValue,
    open,
    handleClicklist,
    menus,
  } = props;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const englishMobileStyles = navbarEngMobile();

  let classes = englishMobileStyles;
  console.log(menus);

  const NestedTreeView = ({ menu, allItems }) => (
    <TreeItem nodeId="5" label="Documents">
      {menu.items.map((item) =>
        item.items ? (
          <NestedTreeView
            ref={ref}
            key={item.menuId}
            menu={item}
            allItems={[
              ...allItems,
              {
                categoryId: menu.categoryId,
                itemId: item.menuId,
                name: item.menuName,
              },
            ]}
          />
        ) : (
          <TreeItem nodeId="8" label="index.js" />
        )
      )}
    </TreeItem>
  );

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={toggleDrawer.bind(null)}
        onOpen={toggleDrawer.bind(null)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding component="nav">
          <ListItem
            onClick={() => {
              toggleDrawer();
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>

          {/* <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {menus.map((menu) =>
              menu.items ? (
                <TreeItem nodeId="1" label="Applications">
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
              ) : (
                <TreeItem key={menu.menuId} nodeId="2" label={menu.menuName} />
              )
            )}
          </TreeView> */}

          {/* <TreeItem nodeId="1" label="Applications">
              <TreeItem nodeId="2" label="Calendar" />
              <TreeItem nodeId="3" label="Chrome" />
              <TreeItem nodeId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
              <TreeItem nodeId="10" label="OSS" />
              <TreeItem nodeId="6" label="Material-UI">
                <TreeItem nodeId="7" label="src">
                  <TreeItem nodeId="8" label="index.js" />
                  <TreeItem nodeId="9" label="tree-view.js" />
                </TreeItem>
              </TreeItem>
            </TreeItem> */}

          <ListItem
            onClick={() => {
              toggleDrawer();
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/trackorder"
            selected={value === 2}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Track Order
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              toggleDrawer();
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contactUs"
            selected={value === 3}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        color="inherit"
        className={classes.drawerIconContainer}
        onClick={toggleDrawer.bind(null)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
};

export default SideDrawer;
