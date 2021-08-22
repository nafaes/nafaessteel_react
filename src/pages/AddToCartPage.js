import React, { useCallback, useEffect, useMemo, useState } from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { ITEMS } from "../constants/routes";
import { getCatergoryItemDetails } from "../services/categories";

const addToCartInitialState = {
  quantity: {
    name: "quantity",
    value: "",
    validationMsg: "Enter Quantity",
    valid: false,
    touched: false,
  },
  price: "",
  formIsValid: false,
};

const AddToCartPage = (props) => {
  const [item, setItem] = useState();
  const [addToCartForm, setAddToCartForm] = useState(addToCartInitialState);
  const [itemSummary, setItemSummary] = useState();

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  const historyItem = useMemo(
    () => historyItems[historyItems.length - 1],
    [historyItems]
  );

  const getItemDetails = useCallback(async () => {
    const response = await getCatergoryItemDetails(2, historyItem.categoryId);
    setItem(response);
  }, [historyItem]);

  useEffect(() => {
    if (historyItem) {
      getItemDetails();
    }
    return () => {
      setItem(null);
    };
  }, [historyItem, getItemDetails]);

  const formChangeHandler = useCallback(
    ({ target: { name, value }, ...values }) => {
      let price;
      let formIsValid = true;
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
          valid: true,
          touched: true,
        },
        price,
        formIsValid,
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

  const addToCartHandler = useCallback(() => {
    if (!addToCartForm.formIsValid) {
      const updatedForm = {
        ...addToCartForm,
        quantity: { ...addToCartForm.quantity, touched: true },
      };
      setAddToCartForm(updatedForm);
    } else {
      setItemSummary({
        itemId: historyItem.categoryId,
        itemName: historyItem.name,
        quantity: addToCartForm.quantity.value,
        price: 566.0,
      });

      setAddToCartForm(addToCartInitialState);
    }
  }, [historyItem.categoryId, historyItem.name, addToCartForm]);

  return (
    <AddToCart
      item={item}
      addToCartForm={addToCartForm}
      formChangeHandler={formChangeHandler}
      historyItems={historyItems}
      breadcrumbNavigation={breadcrumbNavigation}
      addToCartHandler={addToCartHandler}
      itemSummary={itemSummary}
    />
  );
};

export default AddToCartPage;
