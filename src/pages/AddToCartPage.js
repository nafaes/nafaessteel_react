import React, { useCallback, useEffect, useState } from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { ITEMS } from "../constants/routes";
import { getCatergoryItemDetails } from "../services/categories";

const addToCartInitialState = {
  quantity: {
    name: "quantity",
    value: "",
  },
  price: "",
};

const AddToCartPage = (props) => {
  const [categoryName] = useState();
  const [item, setItem] = useState();
  const [addToCartForm, setAddToCartForm] = useState(addToCartInitialState);

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  const categoryId = historyItems[historyItems.length - 1].categoryId;
  // const level = historyItems[historyItems.length - 1].level;
  // const itemId = historyItems[historyItems.length - 1].itemId;

  const getItemDetails = useCallback(async () => {
    const response = await getCatergoryItemDetails(2, categoryId);
    // console.log(response)
    setItem(response);
  }, [categoryId]);

  useEffect(() => {
    if (categoryId) {
      getItemDetails();
    }
    return () => {
      setItem(null);
    };
  }, [categoryId, getItemDetails]);

  const formChangeHandler = useCallback(
    ({ target: { name, value }, ...values }) => {
      let price;
      if (values.hasOwnProperty("price")) {
        price = values.price;
      } else {
        price = "";
      }
      // else if (name === "type" && values.hasOwnProperty("price") === false) {
      //   price = "";
      // } else if (values.hasOwnProperty("price") === false) {
      //   price = addToCartForm.price ? addToCartForm.price : "";
      // }
      setAddToCartForm({
        ...addToCartForm,
        [name]: {
          ...addToCartForm?.[name],
          name,
          value,
        },
        price,
      });
    },
    [addToCartForm]
  );

  const breadcrumbNavigation = useCallback(
    (categoryId, name, level) => {
      const currentCategoryIndex = historyItems.findIndex(
        ({ categoryId: id }) => id === categoryId
      );
      let allItems = [
        ...historyItems.slice(0, currentCategoryIndex),
        {
          categoryId: categoryId,
          itemId: "",
          name: name,
          level: level,
        },
      ];

      history.push(ITEMS, {
        items: allItems,
      });
    },
    [historyItems, history]
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
