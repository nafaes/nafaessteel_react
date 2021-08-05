import React from "react";
import { Link } from "react-router-dom";
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

//   const Item = React.forwardRef(({ item, categoryId }, ref) =>
//     item.items ? (
//       <RenderSubMenu ref={ref} key={item.menuId} menu={item} />
//     ) : (
//       <MenuItem
//         ref={ref}
//         key={item.menuId}
//         component={Link}
//         to={{
//           pathname: ADDTOCART,
//           state: {
//             categoryId,
//             itemId: item.menuId,
//           },
//         }}
//         onClick={popupState.close}
//       >
//         {item.menuName}
//       </MenuItem>
//     )
//   );

  const RenderSubMenu = React.forwardRef(({ menu, props }, ref) => {
    return (
      <SubMenu
        ref={ref}
        {...props}
        popupId={menu.menuName}
        title={menu.menuName}
        className={classes.subMenu}
      >
        {menu.items.map((item) =>
          //   <Item
          //     key={item.menuId}
          //     item={item}
          //     categoryId={menu.menuId}
          //   />

          item.items ? (
            <RenderSubMenu ref={ref} key={item.menuId} menu={item} />
          ) : (
            <MenuItem
              ref={ref}
              key={item.menuName}
              component={Link}
              to={{
                pathname: ADDTOCART,
                state: {
                  categoryId: menu.categoryId,
                  itemId: item.menuId,
                },
              }}
              onClick={popupState.close}
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
          <RenderSubMenu key={category.menuId} menu={category} />
        ) : (
          <MenuItem
            key={category.menuId}
            component={Link}
            to={{
              pathname: ADDTOCART,
              state: { categoryId: category.menuId },
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

export default Menus;
