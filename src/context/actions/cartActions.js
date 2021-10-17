import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEMS_PRICE,
} from "../../constants/actionTypes/cartConstants";

export const addItem = (item) => {
  return { type: ADD_ITEM_TO_CART, payload: item };
};

export const updateItemsPrice = (items) => {
  return {
    type: UPDATE_ITEMS_PRICE,
    payload: items,
  };
};

export const removeItem = (itemId, quantity) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: { itemId, quantity: quantity ? quantity : 0 },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: {},
  };
};
