import React, { useCallback, useEffect, useState } from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { allCategories } from "../constants/data";
import { ITEMS } from "../constants/routes";

const addToCartInitialState = {
  quantity: {
    name: "quantity",
    value: "",
  },
  price: "",
};

const AddToCartPage = (props) => {
  const [categories] = useState(allCategories);
  const [categoryName, setCategoryName] = useState();
  const [item, setItem] = useState();
  const [addToCartForm, setAddToCartForm] = useState(addToCartInitialState);
  // const [price, setPrice] = useState();

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  // console.log(historyItems[historyItems.length - 1])

  const categoryId = historyItems[historyItems.length - 1].categoryId;
  const itemId = historyItems[historyItems.length - 1].itemId;

  console.log(history);

  useEffect(() => {
    if (categoryId && itemId) {
      const { categoryName, items } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setCategoryName(categoryName);
      const categoryItem = items.find(({ itemId: id }) => id === itemId);

      if (!categoryItem && items) {
        for (const item of items) {
          if (item.subItems) {
            const categoryItem = item.subItems.find(
              ({ itemId: id }) => id === itemId
            );
            if (categoryItem) {
              setItem(categoryItem);
              break;
            } else {
              continue;
            }
          } else {
            setItem(categoryItem);
          }
        }
      } else {
        setItem(categoryItem);
      }
    } else if (categoryId) {
      const category = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setItem(category);
      setCategoryName(category.categoryName);
    }

    return () => {
      setItem(null);
    };
  }, [categoryId, itemId, categories]);

  const formChangeHandler = useCallback(
    ({ target: { name, value }, ...values }) => {
      if (values.hasOwnProperty("price")) {
        setAddToCartForm({
          ...addToCartForm,
          [name]: {
            ...addToCartForm?.[name],
            name,
            value,
          },
          price: values.price,
        });
      } else {
        setAddToCartForm({
          ...addToCartForm,
          [name]: {
            ...addToCartForm?.[name],
            name,
            value,
          },
          // price: addToCartForm.price ? addToCartForm.price : "",
        });
      }
    },
    [addToCartForm]
  );

  const breadcrumbNavigation = useCallback(
    (itemId, name) => {
      let allItems;
      if (itemId === "") {
        allItems = [
          {
            categoryId: categoryId,
            itemId: "",
            name: name,
          },
        ];
      } else {
        allItems = [
          historyItems[0],
          {
            categoryId: categoryId,
            itemId: itemId,
            name: name,
          },
        ];
      }

      history.push(ITEMS, {
        // categoryId: categoryId,
        // itemId: itemId,
        items: allItems,
      });
    },
    [historyItems, history, categoryId]
  );

  return (
    <AddToCart
      categoryName={categoryName}
      item={item}
      addToCartForm={addToCartForm}
      formChangeHandler={formChangeHandler}
      historyItems={historyItems}
      breadcrumbNavigation={breadcrumbNavigation}
    />
  );
};

export default AddToCartPage;
