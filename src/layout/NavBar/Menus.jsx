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
  // const { popupState, allMenus, history, location } = props;
  const { popupState, allMenus } = props;

  const englishMobileStyles = navbarEngMobile();
  let classes = englishMobileStyles;

  const { dynamicNavigation } = useNavigation();

  const navigation = useCallback(
    ({ categoryId, categoryName, itemId, itemName, allItems }) => {
      popupState.close();
      dynamicNavigation({
        categoryId,
        categoryName,
        itemId,
        itemName,
        allItems,
      });
    },
    [popupState, dynamicNavigation]
  );

  // const dynamicNavigation = useCallback(
  //   ({
  //     categoryId,
  //     categoryName,
  //     itemId,
  //     itemName,
  //     allItems: historyItems,
  //   }) => {
  //     const historyAllItems = location?.state?.items;
  //     const historyCategoryId =
  //       historyAllItems?.[historyAllItems.length - 1]?.categoryId;
  //     const historyItemId =
  //       historyAllItems?.[historyAllItems.length - 1]?.itemId;

  //     popupState.close();

  //     let allItems = [];
  //     if (historyAllItems) {
  //       if (historyCategoryId && historyItemId) {
  //         allItems = [
  //           ...historyItems,
  //           {
  //             categoryId: categoryId,
  //             itemId: itemId,
  //             name: itemName,
  //           },
  //         ];
  //       } else if (historyItemId === "") {
  //         allItems = [
  //           ...historyItems,
  //           {
  //             categoryId: categoryId,
  //             itemId: "",
  //             name: itemName,
  //           },
  //         ];
  //       }
  //     } else {
  //       if (categoryId && itemId) {
  //         allItems = [
  //           ...historyItems,
  //           {
  //             categoryId: categoryId,
  //             itemId: itemId,
  //             name: itemName,
  //           },
  //         ];
  //       } else if (categoryId) {
  //         allItems = [
  //           {
  //             categoryId: categoryId,
  //             itemId: "",
  //             name: categoryName,
  //           },
  //         ];
  //       }
  //     }

  //     history.push(ADDTOCART, {
  //       items: allItems,
  //     });
  //   },
  //   [popupState, history, location]
  // );

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
            <MenuItem
              ref={ref}
              key={item.menuName}
              onClick={navigation.bind(null, {
                categoryId: menu.categoryId,
                categoryName: menu.menuName,
                itemId: item.menuId,
                itemName: item.menuName,
                allItems,
              })}
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
            key={category.menuId}
            menu={category}
            allItems={[
              {
                categoryId: category.menuId,
                itemId: "",
                name: category.menuName,
              },
            ]}
          />
        ) : (
          <MenuItem
            key={category.menuId}
            component={Link}
            to={{
              pathname: ADDTOCART,
              state: {
                items: [
                  {
                    categoryId: category.menuId,
                    itemId: "",
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
