import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../../constants/actionTypes/cartConstants";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const item = action.payload;
      const currentItemIndex = state.items.findIndex(
        ({ itemId }) => itemId === item.itemId
      );

      if (currentItemIndex >= 0) {
        const updatedItem = {
          ...state.items[currentItemIndex],
          quantity:
            Number(state.items[currentItemIndex].quantity) +
            Number(item.quantity),
        };

        const items = state.items;
        items[currentItemIndex] = updatedItem;
        return {
          items: items,
        };
      } else {
        return {
          items: [...state.items, item],
        };
      }

    case REMOVE_ITEM_FROM_CART:
      const itemIndex = state.items.findIndex(
        ({ itemId }) => itemId === action.payload.itemId
      );
      if (state.items[itemIndex].quantity > 1 && action.payload.quantity > 0) {
        const updatedItem = {
          ...state.items[itemIndex],
          quantity:
            Number(state.items[itemIndex].quantity) -
            Number(action.payload.quantity),
        };

        const items = state.items;
        items[itemIndex] = updatedItem;
        return { items: items };
      } else {
        const updatedCartItems = state.items.filter(
          ({ itemId }) => itemId !== action.payload.itemId
        );
        return { items: updatedCartItems };
      }

    default:
      return state;
  }
};

export default cartReducer;
