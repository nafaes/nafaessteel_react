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
  unit: "",
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

  const historyItem =
    useMemo(() => {
      return historyItems[historyItems.length - 1]
    }, [historyItems]
    );

  const getItemDetails = useCallback(async () => {
    const response = await getCatergoryItemDetails(2, historyItem.categoryId);
    setItem(response);

    let form = {};
    if (response?.selections) {
      response.selections.forEach((dropDown) => {
        const formDropDown = {
          name: dropDown.name,
          value: "",
          validationMsg: `Select ${dropDown.name}`,
          valid: false,
          touched: false,
        };
        form[dropDown.name] = formDropDown;
        console.log(form[dropDown.name])
      });
    }
    setAddToCartForm((addToCartForm) => {
      return {
        ...addToCartForm,
        ...form,
      };
    });
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
    ({ target: { name, value } }) => {
      
      let valid;
      let price = addToCartForm.price ? addToCartForm.price : "";
      let unit = addToCartForm.unit ? addToCartForm.unit : "";

      if (value) {
        valid = true;
      } else {
        valid = false;
      }

      console.log(name)

      if (name !== "quantity") {
        const selectedDropdown = item.selections.find(
          ({ name: selectName }) => selectName === name,
         
        );
        console.log(name)
        console.log(selectedDropdown)

        const selectedItem = selectedDropdown?.types.find(
          ({ itemId }) => itemId === value
        );
         
        console.log(selectedItem)
        if (selectedItem.hasOwnProperty("price")) {
          unit = selectedDropdown.unit;
          price = selectedItem.price;
        }
      }

      const updatedAddToCartForm = {
        ...addToCartForm,
        [name]: {
          ...addToCartForm?.[name],
          name,
          value,
          valid: valid,
          touched: true,
        },
        price,
        unit,
      };

      let formIsValid = true;
      for (let inputIdentifier in updatedAddToCartForm) {
        if (typeof updatedAddToCartForm[inputIdentifier] === "object") {
          formIsValid = updatedAddToCartForm[inputIdentifier].valid && formIsValid; 
        }
      }
      setAddToCartForm({
        ...updatedAddToCartForm,
        formIsValid: formIsValid,
      });
    },
    [addToCartForm, item?.selections]
  );

  const breadcrumbNavigation = useCallback(
    (categoryId, name, level) => {
      const currentCategoryIndex = historyItems.findIndex(
        ({ categoryId: id }) => id === categoryId
      );
      console.log(historyItems)
      console.log(currentCategoryIndex)

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
    if (addToCartForm.formIsValid === false) {
      let updatedForm = {};
      for (let inputIdentifier in addToCartForm) {
        if (typeof addToCartForm[inputIdentifier] === "object") {
          updatedForm[inputIdentifier] = {
            ...addToCartForm[inputIdentifier],
            touched: true,
          };
        }
      }
      setAddToCartForm((addToCartForm) => {
        return { ...addToCartForm, ...updatedForm };
      });
    } else {
      setItemSummary({
        categoryId: historyItem.categoryId,
        categoryName: historyItem.name,
        quantity: addToCartForm.quantity.value,
        price: addToCartForm.price,
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
