import React, { useCallback } from "react";
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
  React.forwardRef(({ classes, title, popupId, children, ...props }, ref) => {
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
          selected={popupState.isOpen}
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
  })
);

const Menus = React.forwardRef((props, ref) => {
  const { popupState, allMenus } = props;
  const englishMobileStyles = navbarEngMobile();
  let classes = englishMobileStyles;

  const { dynamicNavigation } = useNavigation();

  const navigation = useCallback(
    (allItems) => {
      popupState.close();
      dynamicNavigation(allItems);
    },
    [popupState, dynamicNavigation]
  );

  const RenderSubMenu = React.forwardRef(({ menu, allItems, props }, ref) => {
    return (
      <SubMenu
        ref={ref}
        {...props}
        popupId={menu.menuName}
        title={menu.menuName}
        className={classes.subMenu}
      >
        {menu.items.map((item) =>
          item.items ? (
            <RenderSubMenu
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
            <MenuItem
              ref={ref}
              key={item.categoryId}
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
  });

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
