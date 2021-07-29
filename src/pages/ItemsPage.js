import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Items from "../components/Items/Items";
import { allCategories } from "../constants/data";
import { ADDTOCART } from "../constants/routes";

const ItemsPage = (props) => {
  const [categories] = useState(allCategories);
  const [items, setItems] = useState([]);
  let history = useHistory();
  const {
    state: { categoryId },
  } = props.location;

  useEffect(() => {
    const { items: categoryItems } = categories.find(
      ({ categoryId: id }) => categoryId === id
    );
    setItems(categoryItems);

    return () => {
      setItems(null);
    };
  }, [categoryId, categories]);

  const navigateToAddToCart = useCallback(
    (itemId) => {
      history.push(ADDTOCART, {
        categoryId: categoryId,
        itemId: itemId,
      });
    },
    [history, categoryId]
  );

  return <Items items={items} navigateToAddToCart={navigateToAddToCart} />;
};

export default ItemsPage;
