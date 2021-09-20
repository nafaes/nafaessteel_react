import React, { useCallback, useMemo } from "react";
import { Link, withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { navbarEngMobile } from "../../assets/jss/viewStyles/navbar/english";
import withStyles from "@material-ui/core/styles/withStyles";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Menu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";

import { ADDTOCART } from "../../constants/routes";
import useNavigation from "../../hooks/useNavigation";

const ParentPopupState = React.createContext(null);
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
});

const SubMenu = withStyles(submenuStyles)(
  React.forwardRef(
    ({ classes, title, popupId, selected, children, ...props }, ref) => {
      const parentPopupState = React.useContext(ParentPopupState);
      const popupState = usePopupState({
        popupId,
        variant: "popover",
        parentPopupState,
        deferOpenClose: true,
      });
      return (
        <ParentPopupState.Provider value={popupState}>
          <MenuItem
            {...bindHover(popupState)}
            selected={selected}
            // selected={popupState.isOpen}
            ref={ref}
          >
            <span className={classes.title}>{title}</span>
            <ChevronRight className={classes.moreArrow} />
          </MenuItem>
          <Menu
            {...bindMenu(popupState)}
            classes={{ paper: classes.menu }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            getContentAnchorEl={null}
            {...props}
          >
            {children}
          </Menu>
        </ParentPopupState.Provider>
      );
    }
  )
);

const Menus = React.forwardRef((props, ref) => {
  const { popupState, allMenus, location } = props;
  const englishMobileStyles = navbarEngMobile();
  let classes = englishMobileStyles;

  const { dynamicNavigation } = useNavigation();

  const historyItem = useMemo(() => {
    if (location.state?.items) {
      return location.state?.items[location.state?.items.length - 1];
    }
  }, [location.state]);

  const getIsSubMenuSelected = useCallback(
    (id) => {
      const isActive = location.state?.items?.find(
        ({ categoryId }) => categoryId === id
      );
      if (isActive) return true;
      else return false;
    },
    [location.state?.items]
  );

  const navigation = useCallback(
    (allItems) => {
      popupState.close();
      dynamicNavigation(allItems);
    },
    [popupState, dynamicNavigation]
  );

  const RenderSubMenu = React.forwardRef(
    ({ menu, selected, allItems, props }, ref) => {
      return (
        <SubMenu
          ref={ref}
          {...props}
          popupId={menu.menuName}
          title={menu.menuName}
          selected={selected}
          className={classes.subMenu}
        >
          {menu.items.map((item) =>
            item.items ? (
              <RenderSubMenu
                ref={ref}
                key={item.categoryId}
                menu={item}
                selected={getIsSubMenuSelected(item.categoryId)}
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
              <MenuItem
                ref={ref}
                key={item.categoryId}
                selected={historyItem?.categoryId === item.categoryId}
                onClick={navigation.bind(null, [
                  ...allItems,
                  {
                    categoryId: item.categoryId,
                    name: item.menuName,
                  },
                ])}
              >
                {item.menuName}
              </MenuItem>
            )
          )}
        </SubMenu>
      );
    }
  );

  return (
    <Menu
      {...bindMenu(popupState)}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      getContentAnchorEl={null}
      className={classes.menuCls}
      disableScrollLock={true}
    >
      {allMenus.map((category) =>
        category.items ? (
          <RenderSubMenu
            key={category.categoryId}
            menu={category}
            selected={getIsSubMenuSelected(category.categoryId)}
            allItems={[
              {
                categoryId: category.categoryId,
                name: category.menuName,
                level: category.nextLevel,
              },
            ]}
          />
        ) : (
          <MenuItem
            key={category.categoryId}
            component={Link}
            selected={historyItem?.categoryId === category.categoryId}
            to={{
              pathname: ADDTOCART,
              state: {
                items: [
                  {
                    categoryId: category.categoryId,
                    name: category.menuName,
                  },
                ],
              },
            }}
            onClick={popupState.close}
          >
            {category.menuName}
          </MenuItem>
        )
      )}
    </Menu>
  );
});

export default withRouter(Menus);
