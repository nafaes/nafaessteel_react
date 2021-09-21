import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { useTranslation } from "react-i18next";

import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";
import useNavigation from "../../hooks/useNavigation";
import { ADDTOCART, LANDING, ORDERS } from "../../constants/routes";

const SideDrawer = (props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const {
    goToContactUs,
    openDrawer,
    toggleDrawer,
    value,
    setValue,
    menus,
    isAuthenticated,
  } = props;

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const englishMobileStyles = navbarEngMobile();
  let classes = englishMobileStyles;

  const { dynamicNavigation } = useNavigation();

  const navigation = useCallback(
    (allItems) => {
      toggleDrawer();
      dynamicNavigation(allItems);
    },
    [toggleDrawer, dynamicNavigation]
  );

  const NestedTreeView = React.forwardRef(({ menu, allItems }, ref) => (
    <TreeItem
      nodeId={menu.categoryId + menu.menuName}
      label={menu.menuName}
      style={{ color: "white" }}
    >
      {menu.items.map((item) =>
        item.items ? (
          <NestedTreeView
            ref={ref}
            key={item.categoryId}
            menu={item}
            allItems={[
              ...allItems,
              {
                categoryId: item.categoryId,
                name: item.menuName,
                level: item.nextLevel,
              },
            ]}
          />
        ) : (
          <TreeItem
            key={item.categoryId}
            nodeId={item.categoryId + item.menuName}
            label={item.menuName}
            style={{ color: "white" }}
            onClick={navigation.bind(null, [
              ...allItems,
              {
                categoryId: item.categoryId,
                name: item.menuName,
              },
            ])}
          />
        )
      )}
    </TreeItem>
  ));

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
            to={LANDING}
            selected={value === 0}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              {t("Navbar.Home")}
            </ListItemText>
          </ListItem>

          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {menus.map((menu) =>
              menu.items ? (
                <NestedTreeView
                  key={menu.categoryId}
                  menu={menu}
                  allItems={[
                    {
                      categoryId: menu.categoryId,
                      name: menu.menuName,
                      level: menu.nextLevel,
                    },
                  ]}
                />
              ) : (
                <TreeItem
                  key={menu.categoryId}
                  nodeId={menu.categoryId + menu.menuName}
                  label={menu.menuName}
                  style={{ color: "white" }}
                  onClick={() => {
                    toggleDrawer();
                    history.push(ADDTOCART, {
                      items: [
                        {
                          categoryId: menu.categoryId,
                          name: menu.menuName,
                        },
                      ],
                    });
                  }}
                />
              )
            )}
          </TreeView>

          {isAuthenticated ? (
            <ListItem
              onClick={() => {
                toggleDrawer();
                setValue(2);
              }}
              divider
              button
              component={Link}
              to={ORDERS}
              selected={value === 2}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {t("Navbar.Orders")}
              </ListItemText>
            </ListItem>
          ) : null}

          <ListItem
            onClick={() => {
              toggleDrawer();
              goToContactUs();
            }}
            divider
            button
            // selected={value === 0}
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              {t("Navbar.ContactUS")}
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
