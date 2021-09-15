import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import { ITEMS } from "../constants/routes";
import { addItem } from "../context/actions/cartActions";
import { GlobalContext } from "../context/Provider";
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
  const { dispatchCartActions } = useContext(GlobalContext);

  const {
    history,
    location: {
      state: { items: historyItems },
    },
  } = props;

  const historyItem = useMemo(() => {
    return historyItems[historyItems.length - 1];
  }, [historyItems]);

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
    ({ target: { name, value }, ...values }) => {
      let valid;
      let price = addToCartForm.price ? addToCartForm.price : "";
      let unit = addToCartForm.unit ? addToCartForm.unit : "";

      if (value) {
        valid = true;
      } else {
        valid = false;
      }

      let dropdown;
      if (name !== "quantity" && value !== "") {
        const selectedDropdown = item.selections.find(
          ({ name: selectName }) => selectName === name
        );

        const selectedItem = selectedDropdown?.types.find(
          ({ itemId }) => itemId === value
        );

        dropdown = {
          item: selectedItem.item,
          itemId: selectedItem.itemId,
        };

        if (selectedItem && selectedItem.hasOwnProperty("price")) {
          unit = selectedDropdown.unit;
          price = selectedItem.price;

          dropdown = {
            item: selectedItem.item,
            itemId: selectedItem.itemId,
            price: selectedItem.price,
          };
        }
      }

      if (
        name !== "quantity" &&
        value === "" &&
        values.hasOwnProperty("price")
      ) {
        unit = "";
        price = "";
      }

      const updatedAddToCartForm = {
        ...addToCartForm,
        [name]: {
          ...addToCartForm?.[name],
          name,
          value,
          valid: valid,
          touched: true,
          ...dropdown,
        },
        price,
        unit,
      };

      let formIsValid = true;
      for (let inputIdentifier in updatedAddToCartForm) {
        if (typeof updatedAddToCartForm[inputIdentifier] === "object") {
          formIsValid =
            updatedAddToCartForm[inputIdentifier].valid && formIsValid;
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
    (categoryId) => {
      const currentCategoryIndex = historyItems.findIndex(
        ({ categoryId: id }) => id === categoryId
      );
      let allItems = historyItems.slice(0, currentCategoryIndex + 1);
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
      let selectedValues = [];
      let itemId;
      for (let inputIdentifier in addToCartForm) {
        if (
          typeof addToCartForm[inputIdentifier] === "object" &&
          addToCartForm[inputIdentifier].name !== "quantity"
        ) {
          selectedValues.push({
            name: addToCartForm[inputIdentifier].name,
            item: addToCartForm[inputIdentifier].item,
            value: addToCartForm[inputIdentifier].value,
          });

          if (addToCartForm[inputIdentifier].hasOwnProperty("item")) {
            itemId = addToCartForm[inputIdentifier].itemId;
          }
        }
      }

      dispatchCartActions(
        addItem({
          categoryId: historyItem.categoryId,
          itemId: itemId,
          itemName: historyItem.name,
          itemImage: item.image,
          selectedValues,
          quantity: addToCartForm.quantity.value,
          price: addToCartForm.price,
        })
      );

      setItemSummary({
        itemId: historyItem.categoryId,
        selectedValues,
      });

      let updatedForm = { formIsValid: false };
      for (let inputIdentifier in addToCartForm) {
        if (typeof addToCartForm[inputIdentifier] === "object") {
          updatedForm[inputIdentifier] = {
            ...addToCartForm[inputIdentifier],
            value: "",
            valid: false,
            touched: false,
          };
        }
      }
      setAddToCartForm(updatedForm);
    }
  }, [
    historyItem.categoryId,
    historyItem.name,
    item?.image,
    addToCartForm,
    dispatchCartActions,
  ]);

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
