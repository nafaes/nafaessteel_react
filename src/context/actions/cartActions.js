export const addItem = (itemId, quantity) => {
  return { type: "ADD", payload: { itemId, quantity } };
};

export const removeItem = (itemId, quantity) => {
  return {
    type: "REMOVE",
    payload: { itemId, quantity: quantity ? quantity : 0 },
  };
};
