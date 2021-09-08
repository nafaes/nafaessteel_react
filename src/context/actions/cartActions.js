import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../../constants/actionTypes/cartConstants";

export const addItem = (item) => {
  return { type: ADD_ITEM_TO_CART, payload: item };
};

export const removeItem = (itemId, quantity) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: { itemId, quantity: quantity ? quantity : 0 },
  };
};
