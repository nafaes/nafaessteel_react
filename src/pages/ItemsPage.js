import React, { useCallback, useEffect, useState } from "react";

import Items from "../components/Items/Items";
import { allCategories } from "../constants/data";
import { ADDTOCART, ITEMS } from "../constants/routes";

const ItemsPage = (props) => {
  const [categories] = useState(allCategories);
  const [items, setItems] = useState([]);

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  const categoryId = historyItems[historyItems.length - 1].categoryId;
  const itemId = historyItems[historyItems.length - 1].itemId;

  useEffect(() => {
    if (categoryId && itemId) {
      const category = categories.find(
        ({ categoryId: id }) => categoryId === id
      );

      const categoryItem = category.items.find(
        ({ itemId: id }) => id === itemId
      );
      setItems(categoryItem.subItems);
    } else if (categoryId) {
      const category = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      const { items: categoryItems } = category;
      setItems(categoryItems);
    }

    return () => {
      setItems(null);
    };
  }, [categoryId, itemId, categories]);

  const navigate = useCallback(
    (nextLevel, item) => {
      let allItems;

      allItems = [
        ...historyItems,
        {
          categoryId: categoryId,
          itemId: item.itemId,
          name: item.itemName,
        },
      ];

      if (nextLevel === 2) {
        history.push(ITEMS, {
          items: allItems,
        });
      } else if (nextLevel === 3) {
        history.push(ADDTOCART, {
          items: allItems,
        });
      }
    },
    [historyItems, categoryId, history]
  );

  return <Items items={items} navigate={navigate} />;
};

export default ItemsPage;
