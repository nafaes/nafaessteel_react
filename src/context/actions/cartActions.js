export const addItem = (item) => {
  return { type: "ADD", payload: item };
};

export const removeItem = (itemId, quantity) => {
  return {
    type: "REMOVE",
    payload: { itemId, quantity: quantity ? quantity : 0 },
  };
};
