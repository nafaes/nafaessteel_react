import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ADDTOCART } from "../constants/routes";

const useNavigation = () => {
  const history = useHistory();
  const location = useLocation();

  const dynamicNavigation = useCallback(
    ({
      categoryId,
      categoryName,
      itemId,
      itemName,
      allItems: historyItems,
    }) => {
      const historyAllItems = location?.state?.items;
      const historyCategoryId =
        historyAllItems?.[historyAllItems.length - 1]?.categoryId;
      const historyItemId =
        historyAllItems?.[historyAllItems.length - 1]?.itemId;

      let allItems = [];
      if (historyAllItems) {
        if (historyCategoryId && historyItemId) {
          allItems = [
            ...historyItems,
            {
              categoryId: categoryId,
              itemId: itemId,
              name: itemName,
            },
          ];
        } else if (historyItemId === "") {
          allItems = [
            ...historyItems,
            {
              categoryId: categoryId,
              itemId: "",
              name: itemName,
            },
          ];
        }
      } else {
        if (categoryId && itemId) {
          allItems = [
            ...historyItems,
            {
              categoryId: categoryId,
              itemId: itemId,
              name: itemName,
            },
          ];
        } else if (categoryId) {
          allItems = [
            {
              categoryId: categoryId,
              itemId: "",
              name: categoryName,
            },
          ];
        }
      }

      history.push(ADDTOCART, {
        items: allItems,
      });
    },
    [history, location]
  );

  return {
    dynamicNavigation,
  };
};

export default useNavigation;
