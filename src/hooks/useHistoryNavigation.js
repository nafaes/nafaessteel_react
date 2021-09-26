import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ADDTOCART, ITEMS } from "../constants/routes";

const useHistoryNavigation = () => {
  const history = useHistory();
  const { state } = useLocation();

  const navigate = useCallback(
    ({ isParent, categoryId, categoryName, nextLevel }) => {
      const category = {
        categoryId: categoryId,
        name: categoryName,
        level: nextLevel,
      };
      const allItems = state?.items ? [...state.items, category] : [category];
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
    [history, state]
  );

  return navigate;
};

export default useHistoryNavigation;
