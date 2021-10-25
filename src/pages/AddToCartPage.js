import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import AddToCart from "../components/AddToCart/AddToCart";
import Notification from "../common/Notification/Notification";
import { ITEMS } from "../constants/routes";
import { addItem } from "../context/actions/cartActions";
import { GlobalContext } from "../context/Provider";
import { getCatergoryItemDetails } from "../services/categories";

const addToCartInitialState = {
  quantity: {
    name: "quantity",
    value: "",
    validationMsg: "AddToCart.Validations.EnterQuantity",
    valid: false,
    touched: false,
  },
  availableQuantity: 0,
  unit: "",
  price: "",
  formIsValid: false,
};

const AddToCartPage = (props) => {
  const [item, setItem] = useState();
  const [addToCartForm, setAddToCartForm] = useState(addToCartInitialState);
  const [loading, setIsLoading] = useState(false);
  const [itemSummary, setItemSummary] = useState();
  const { languageId, dispatchCartActions } = useContext(GlobalContext);
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });

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
    try{
      setIsLoading(true);
      const response = await getCatergoryItemDetails(
        languageId,
        historyItem.categoryId
      );
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
      setIsLoading(false);
    }
    catch (err)
    {
      setIsLoading(false);
    }
  }, [languageId, historyItem]);

  useEffect(() => {
    if (historyItem) {
      getItemDetails();
    }
    return () => {
      setItem(null);
      setItemSummary();
      setAddToCartForm(addToCartInitialState);
      setNotify({ isOpen: false, message: "", type: "" });
    };
  }, [historyItem, getItemDetails]);

  const formChangeHandler = useCallback(
    ({ target: { name, value }, ...values }) => {
      let availableQuantity = addToCartForm.availableQuantity
        ? addToCartForm.availableQuantity
        : 0;
      let price = addToCartForm.price ? addToCartForm.price : "";
      let unit = addToCartForm.unit ? addToCartForm.unit : "";
      console.log("AvailableQuantity96",availableQuantity)
      let dropdownProperties;
      if (name !== "quantity" && value !== "") {
        const selectedDropdown = item.selections.find(
          ({ name: selectName }) => selectName === name
        );
        const selectedItem = selectedDropdown?.types.find(
          ({ itemId }) => itemId === value
        );

        dropdownProperties = {
          item: selectedItem.item,
          itemId: selectedItem.itemId,
        };

        if (selectedItem && selectedItem.hasOwnProperty("price")) {
          unit = selectedDropdown.unit;
          price = selectedItem.price;
          dropdownProperties["price"] = selectedItem.price;
        }

        if (selectedItem && selectedItem.hasOwnProperty("availableStock")) {
          availableQuantity = selectedItem.availableStock;
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
          value,
          valid: value ? true : false,
          touched: true,
          ...dropdownProperties,
        },
        price,
        unit,
        availableQuantity,
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

  const clearForm = () =>{
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
    } else if (addToCartForm.quantity.value > addToCartForm.availableQuantity) {
      setNotify({
        isOpen: true,
        message: `Entered Quantity ${addToCartForm.quantity.value} not available. Available Quantity is ${addToCartForm.availableQuantity}.`,
        type: "error",
      });
      clearForm();
    }
    else if (addToCartForm.quantity.value <= 0) {
      setNotify({
        isOpen: true,
        message: `Quantity Should be Greater than zero`,
        type: "error",
      });
      clearForm();
    } 
    else {
      let selectedValues = [];
      let itemId;
      for (const inputIdentifier in addToCartForm) {
        if (
          typeof addToCartForm[inputIdentifier] === "object" &&
          inputIdentifier !== "quantity"
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
          quantity: Math.abs(addToCartForm.quantity.value),
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
    <Fragment>
      <AddToCart
        item={item}
        addToCartForm={addToCartForm}
        formChangeHandler={formChangeHandler}
        historyItems={historyItems}
        breadcrumbNavigation={breadcrumbNavigation}
        addToCartHandler={addToCartHandler}
        itemSummary={itemSummary}
        loding = {loading}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </Fragment>
  );
};

export default AddToCartPage;
