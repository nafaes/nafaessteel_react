import React, { useCallback, useContext, useEffect, useState } from "react";
import Orders from "../components/TrackOrder/Orders";
import { GlobalContext } from "../context/Provider";
import { LANDING } from "../constants/routes";
import { saveAs } from "file-saver";
import {
  getAllOrders,
  getOrderDetails,
  trackOrder,
  downloadPDF,
} from "../services/trackOrder";

const OrdersPage = (props) => {
  const { location, history } = props;
  const {
    userState: { isAuthenticated, userId },
    languageId,
  } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    allOrders: [],
    totalAmount: 0,
  });

  const getOrders = useCallback(async () => {

    try{
      if (location?.state === undefined && isAuthenticated === false) {
        history.push(LANDING);
      }
      if (location?.state && isAuthenticated === false) {
        const { orderId, userEmail } = location.state;
        const response = await trackOrder(orderId, userEmail, languageId);
        setOrders(response);
      }
      if (isAuthenticated) {
        console.log(isAuthenticated)
        const response = await getAllOrders(userId, languageId);
        console.log(response);
        setOrders(response);
        
      }
    }catch(error){
      throw error;
    }
  }, [languageId, isAuthenticated, userId, location?.state, history]);

  useEffect(() => {
    getOrders();
    return () => {
      setOrders([]);
      setOrderDetails({
        allOrders: [],
        totalAmount: 0,
      });
    };
  }, [getOrders]);

  const getOrderDetailsHandler = useCallback(async (orderId, totalAmount) => {
      const response = await getOrderDetails(orderId, languageId);
      setOrderDetails({ allOrders: response, totalAmount });
    },
    [languageId]
  );

  const downloadPdf = useCallback(async (orderId) => {
      const response = await downloadPDF(orderId, languageId);
      const file = new Blob([response], {
        type: "application/pdf",
      });
      saveAs(file, "Order");
    },
    [languageId]
  );

  return (
    <Orders
      orders={orders}
      downloadPdf={downloadPdf}
      getOrderDetails={getOrderDetailsHandler}
      orderDetails={orderDetails}
    />
  );
};

export default OrdersPage;
