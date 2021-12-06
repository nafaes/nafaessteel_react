import React, { createContext, useCallback, useContext, useState } from "react";

import CartComponent from "../components/Cart/Cart";
import CartDialog from "../components/Cart/CartDialog/CartDialog";
import Notification from "../common/Notification/Notification";
import { GlobalContext } from "../context/Provider";
import { validateOrder } from "../services/cart";
import { CHECKOUT } from "../constants/routes";
import { updateItemsPrice } from "../context/actions/cartActions";

export const CartContext = createContext();

const CartPage = ({ history }) => {
  const {
    languageId,
    cartState: { items: cartItems },
    dispatchCartActions,
  } = useContext(GlobalContext);

  const [validationItems, setValidationItems] = useState([]);
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });
  const [placeOrder, setPlaceOrder] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const orderValidation = useCallback(async () => {
    setPlaceOrder(true);
    const orderItems = cartItems.map(
      ({ itemId, categoryId, quantity, price }) => {
        return {
          categoryid: categoryId,
          id: itemId,
          quantity,
          price,
        };
      }
    );

    try {
      const response = await validateOrder(orderItems, languageId);
      console.log(response.items)
      setPlaceOrder(false);
      if (response.code === 200 && response.hasOwnProperty("items")) {
        setOpenDialog(true);
        setValidationItems(response.items);
      } else if (response.code === 200) {
        history.push(CHECKOUT[1]);
      }
    } catch (err) {
      setNotify({ isOpen: true, message: err.message, type: "error" });
      setPlaceOrder(false);
    }
  }, [cartItems, languageId, history]);

  const proceedHandler = useCallback(() => {
    setOpenDialog(false);
    dispatchCartActions(updateItemsPrice(validationItems));
    history.push(CHECKOUT);
  }, [history, validationItems, dispatchCartActions]);

  return (
    <CartContext.Provider
      value={{
        orderValidation,
        placeOrderLoading: placeOrder,
      }}
    >
      <CartComponent />
      <CartDialog
        openDialog={openDialog}
        handleClose={handleClose}
        proceedHandler={proceedHandler}
        validationItems={validationItems}
      />
      {notify.isOpen && <Notification notify={notify} setNotify={setNotify} />}
    </CartContext.Provider>
  );
};

export default CartPage;
