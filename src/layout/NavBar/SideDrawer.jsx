import React from "react";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import navbarEngDesk from "../../assets/scss/navbar.module.scss";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";

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
    <TreeItem
      nodeId={menu.categoryId + menu.menuName}
      label={menu.menuName}
      style={{ color: "white" }}
    >
      {menu.items.map((item) =>
        item.items ? (
          <NestedTreeView
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
          <TreeItem
            key={item.menuId}
            nodeId={item.menuId}
            label={item.menuName}
            style={{ color: "white" }}
          />
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

          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {menus.map((menu) =>
              menu.items ? (
                <NestedTreeView
                  key={menu.menuId}
                  menu={menu}
                  allItems={[
                    {
                      categoryId: menu.menuId,
                      itemId: "",
                      name: menu.menuName,
                    },
                  ]}
                />
              ) : (
                <TreeItem
                  key={menu.menuId}
                  nodeId="2"
                  label={menu.menuName}
                  style={{ color: "white" }}
                />
              )
            )}
          </TreeView>

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
