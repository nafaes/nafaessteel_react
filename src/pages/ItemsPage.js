import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Items from "../components/Items/Items";
import { allCategories } from "../constants/data";
import { ADDTOCART, ITEMS } from "../constants/routes";

const ItemsPage = (props) => {
  const [categories] = useState(allCategories);
  const [items, setItems] = useState([]);
  let history = useHistory();
  const {
    state: { categoryId, itemId },
  } = props.location;

  useEffect(() => {
    // const { items: categoryItems } = categories.find(
    //   ({ categoryId: id }) => categoryId === id
    // );
    // setItems(categoryItems);

    if (categoryId && itemId) {
      const { items } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      const categoryItem = items.find(({ itemId: id }) => id === itemId);
      console.log(categoryItem);
      setItems(categoryItem.subItems);
    } else if (categoryId) {
      const { items: categoryItems } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setItems(categoryItems);
    }

    return () => {
      setItems(null);
    };
  }, [itemId, categoryId, categories]);

  const navigate = useCallback(
    (nextLevel, itemId) => {
      if (nextLevel === 2) {
        history.push(ITEMS, {
          categoryId: categoryId,
          itemId: itemId,
        });
      } else if (nextLevel === 3) {
        history.push(ADDTOCART, {
          categoryId: categoryId,
          itemId: itemId,
        });
      }
    },
    [categoryId, history]
  );

  const navigateToAddToCart = useCallback(
    (itemId) => {
      history.push(ADDTOCART, {
        categoryId: categoryId,
        itemId: itemId,
      });
    },
    [history, categoryId]
  );

  return (
    <Items
      items={items}
      navigateToAddToCart={navigateToAddToCart}
      navigate={navigate}
    />
  );
};

export default ItemsPage;
