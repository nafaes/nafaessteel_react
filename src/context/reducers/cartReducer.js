import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
} from "../../constants/actionTypes/cartConstants";

const cartReducer = (state, { type, payload: item }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      const currentItemIndex = state.items.findIndex(({ itemId }) => itemId === item.itemId);
      if (currentItemIndex >= 0) {
        const currentItem = state.items[currentItemIndex];
        console.log("currentItem",currentItem);
        const updatedItem = {
          ...currentItem,
          quantity: Number(currentItem.quantity) + Number(item.quantity),
        };
       
        const items = state.items;
        items[currentItemIndex] = updatedItem;
        return {
          items: items,
          totalItems: state.totalItems + Number(item.quantity),
          totalAmount: state.totalAmount + (Number(item.quantity) * Number(currentItem.price)),
        };
      } else {
        return {
          items: [...state.items, item],
          totalItems: state.totalItems + Number(item.quantity),
          totalAmount: state.totalAmount + (Number(item.quantity) * Number(item.price)),

        };
      }

    case REMOVE_ITEM_FROM_CART:
      const itemIndex = state.items.findIndex(({ itemId }) => itemId === item.itemId);
      if (state.items[itemIndex].quantity > 1 && item.quantity > 0) {
        const currentItem = state.items[itemIndex];
        const updatedItem = {
          ...currentItem,
          quantity: Number(currentItem.quantity) - Number(item.quantity),
        };
        const items = state.items;
        items[itemIndex] = updatedItem;
        return {
          items: items,
          totalItems: Number(state.totalItems) - Number(item.quantity),
          totalAmount: state.totalAmount - (Number(currentItem.price) * Number(item.quantity)),

        };
      } else {
        const currentItem = state.items.find(({ itemId }) => itemId === item.itemId);
        const updatedCartItems = state.items.filter(({ itemId }) => itemId !== item.itemId);
        return {
          items: updatedCartItems,
          totalItems: Number(state.totalItems) - Number(state.items[itemIndex].quantity),
          totalAmount: state.totalAmount - (Number(currentItem.price) * Number(currentItem.quantity)),
        };
      }

    case CLEAR_CART:
      return {
        items: [],
        totalItems: 0,
        totalAmount: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
