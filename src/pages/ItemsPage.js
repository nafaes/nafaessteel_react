import React, { useCallback, useEffect, useState } from "react";

import Items from "../components/Items/Items";
import { ADDTOCART, ITEMS } from "../constants/routes";
import { getAllCatergoryItems } from "../services/categories";

const ItemsPage = (props) => {
  const [catergoryItems, setCategoryItems] = useState([]);

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  const categoryId = historyItems[historyItems.length - 1].categoryId;
  const level = historyItems[historyItems.length - 1].level;

  const getCatergoryItems = useCallback(async () => {
    const response = await getAllCatergoryItems(categoryId, level, 2);
    setCategoryItems(response);
  }, [categoryId, level]);

  useEffect(() => {
    if (categoryId) {
      getCatergoryItems();
    }
    return () => {
      setCategoryItems(null);
    };
  }, [categoryId, getCatergoryItems]);

  const navigate = useCallback(
    (isParent, item) => {
      let allItems = [
        ...historyItems,
        {
          categoryId: item.categoryId,
          itemId: item.itemId,
          name: item.categoryName,
          level: item.nextLevel,
        },
      ];
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
    [historyItems, history]
  );

  return <Items items={catergoryItems} navigate={navigate} />;
};

export default ItemsPage;
