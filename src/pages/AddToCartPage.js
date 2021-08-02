import React, { useCallback, useEffect, useState } from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { allCategories } from "../constants/data";

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
  const [price, setPrice] = useState();

  const {
    state: { categoryId, itemId },
  } = props.location;

  useEffect(() => {
    if (categoryId && itemId) {
      const { categoryName, items } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setCategoryName(categoryName);

      const categoryItem = items.find(({ itemId: id }) => id === itemId);
      // console.log(items);
      // console.log(categoryItem);

      if (categoryItem?.subItems) {
        for (const item of items) {
          const categoryItem = item.subItems.find(
            ({ itemId: id }) => id === itemId
          );
          if (categoryItem) {
            setItem(categoryItem);
            break;
          }
        }
      } else {
        setItem(categoryItem);
      }
    } else if (categoryId) {
      const { categoryName } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      setCategoryName(categoryName);
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

      // setAddToCartForm({
      //   ...addToCartForm,
      //   [name]: {
      //     ...addToCartForm?.[name],
      //     name,
      //     value,
      //   },
      //   price: values.price ? values.price : "",
      // });
    },
    [addToCartForm]
  );

  return (
    <AddToCart
      categoryName={categoryName}
      item={item}
      addToCartForm={addToCartForm}
      formChangeHandler={formChangeHandler}
    />
  );
};

export default AddToCartPage;
