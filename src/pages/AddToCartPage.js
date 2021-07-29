import React, { useCallback, useEffect, useState } from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { allCategories } from "../constants/data";

const AddToCartPage = (props) => {
  const [categories] = useState(allCategories);
  const [categoryName, setCategoryName] = useState();
  const [item, setItem] = useState([]);
  const [type, setType] = useState();
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState();

  const [length, setLength] = useState();
  const [price, setPrice] = useState();

  const {
    state: { categoryId, itemId },
  } = props.location;

  useEffect(() => {
    if (categoryId && itemId) {
      const { categoryName, items } = categories.find(
        ({ categoryId: id }) => categoryId === id
      );
      const categoryItem = items.find(({ itemId: id }) => id === itemId);

      setCategoryName(categoryName);
      console.log(categoryItem);
      setItem(categoryItem);
    }

    return () => {
      setItem(null);
    };
  }, [categoryId, itemId, categories]);

  const typeChangeHandler = useCallback(
    (event) => {
      const typeId = event.target.value;
      if (typeId) {
        const typeSizes = item.types.find(({ id }) => id === typeId);
        setSizes(typeSizes.sizes);
        setSize();
        setPrice();
      } else {
        setType();
        setSizes();
        setPrice();
      }
    },
    [item]
  );

  const sizeChangeHandler = useCallback(
    (event) => {
      const sizeId = event.target.value;
      if (sizeId) {
        setSize(sizeId);
        const sizePrice = sizes.find(({ id }) => id === Number(sizeId));
        setPrice(sizePrice.price);
      } else {
        setSize();
        setPrice();
      }
    },
    [sizes]
  );

  const lengthHandler = useCallback(
    (event) => {
      const lengthId = event.target.value;
      if (lengthId) {
        setLength(lengthId);
        const lengthPrice = item.lengths.find(
          ({ lengthId: id }) => id === Number(lengthId)
        );
        setPrice(lengthPrice.price);
      } else {
        setLength();
        setPrice();
      }
    },
    [item]
  );

  return (
    <AddToCart
      categoryName={categoryName}
      item={item}
      type={type}
      typeChangeHandler={typeChangeHandler}
      sizes={sizes}
      size={size}
      sizeChangeHandler={sizeChangeHandler}
      length={length}
      lengthHandler={lengthHandler}
      price={price}
    />
  );
};

export default AddToCartPage;
