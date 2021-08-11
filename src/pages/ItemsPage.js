import React, { useCallback, useEffect, useState } from "react";

import Items from "../components/Items/Items";
import { allCategories } from "../constants/data";
import { ADDTOCART, ITEMS } from "../constants/routes";

const ItemsPage = (props) => {
  const [categories] = useState(allCategories);
  const [category, setCategory] = useState();
  const [items, setItems] = useState([]);

  const { history, location } = props;
  const categoryId = location.state?.categoryId;
  // const historyItems = location.state?.items;
  console.log(props);

  // useEffect(() => {
  //   if (categoryId && itemId) {
  //     const { items } = categories.find(
  //       ({ categoryId: id }) => categoryId === id
  //     );
  //     const categoryItem = items.find(({ itemId: id }) => id === itemId);
  //     console.log(categoryItem);
  //     setItems(categoryItem.subItems);
  //   } else if (categoryId) {
  //     const { items: categoryItems } = categories.find(
  //       ({ categoryId: id }) => categoryId === id
  //     );
  //     setItems(categoryItems);
  //   }

  //   return () => {
  //     setItems(null);
  //   };
  // }, [itemId, categoryId, categories]);

  useEffect(() => {
    const {
      state: { categoryId, itemId },
    } = location;
    // console.log(categoryId, itemId);

    if (categoryId && itemId) {
      const category = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setCategory(category);

      const categoryItem = category.items.find(
        ({ itemId: id }) => id === itemId
      );
      // console.log(categoryItem);
      setItems(categoryItem.subItems);
    } else if (categoryId) {
      const category = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      const { items: categoryItems } = category;
      setCategory(category);
      setItems(categoryItems);
    }

    return () => {
      setItems(null);
    };
  }, [location, categories]);

  // const navigate = useCallback(
  //   (nextLevel, itemId) => {
  //     if (nextLevel === 2) {
  //       history.push(ITEMS, {
  //         categoryId: categoryId,
  //         itemId: itemId,
  //       });
  //     } else if (nextLevel === 3) {
  //       history.push(ADDTOCART, {
  //         categoryId: categoryId,
  //         itemId: itemId,
  //       });
  //     }
  //   },
  //   [categoryId, history]
  // );

  const navigate = useCallback(
    (nextLevel, item) => {
      let allItems;
      if (location.state?.items) {
        if (location.state.categoryId && location.state.itemId) {
          allItems = [
            ...location.state.items,
            {
              categoryId: location.state.categoryId,
              itemId: item.itemId,
              name: item.itemName,
            },
          ];
        } else {
          allItems = [
            ...location.state.items,
            {
              categoryId: location.state.categoryId,
              itemId: item.itemId,
              name: item.itemName,
            },
          ];
        }
      } else if (location.state.itemId === "") {
        allItems = [
          {
            categoryId: location.state.categoryId,
            itemId: "",
            name: category.categoryName,
          },
        ];
      }

      if (nextLevel === 2) {
        history.push(ITEMS, {
          ...location.state,
          categoryId: location.state.categoryId,
          itemId: item.itemId,
          items: allItems,
        });
      } else if (nextLevel === 3) {
        history.push(ADDTOCART, {
          ...location.state,
          categoryId: location.state.categoryId,
          items: allItems,
          itemId: item.itemId,
        });
      }
    },
    [category, location, history]
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
