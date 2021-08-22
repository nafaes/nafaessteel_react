import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ADDTOCART, ITEMS } from "../constants/routes";

const useHistoryNavigation = () => {
  const history = useHistory();
  const { state: locationState } = useLocation();

  const navigate = useCallback(
    ({ isParent, categoryId, categoryName, nextLevel }) => {
      let allItems;
      if (locationState?.items) {
        allItems = [
          ...locationState.items,
          {
            categoryId: categoryId,
            name: categoryName,
            level: nextLevel,
          },
        ];
      } else {
        allItems = [
          {
            categoryId: categoryId,
            name: categoryName,
            level: nextLevel,
          },
        ];
      }

      if (isParent === true) {
        history.push(ITEMS, {
          items: allItems,
        });
      } else if (isParent === false) {
        history.push(ADDTOCART, {
          items: allItems,
        });
      }
    },
    [history, locationState]
  );

  return navigate;
};

export default useHistoryNavigation;
