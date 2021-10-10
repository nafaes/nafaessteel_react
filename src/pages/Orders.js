import React, { useCallback, useContext, useEffect, useState } from "react";
import Orders from "../components/TrackOrder/Orders";
import { getOrderDetails ,downloadPDF} from "../services/trackOrder";
import { GlobalContext } from "../context/Provider";
import { LANDING } from "../constants/routes";
import axiosInstance from "../helpers/axiosInstance";
import { saveAs } from 'file-saver';

const OrdersPage = (props) => {
  const { location, history } = props;
  const {
    userState: { isAuthenticated, userId },languageId
  } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    allOrders: [],
    totalAmount: 0,
  });

  const getAllOrders = async (userId) => {
    try {
      const { data } = await axiosInstance.get(`/allorders/${userId}/2`);
      if (data) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  };

  const trackOrder = async (orderId, userEmail) => {
    try {
      const { data } = await axiosInstance.get(`/trackorder/${orderId}/${userEmail}`);
      if (data) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  };

  const getOrders = useCallback(async () => {
    if (location?.state === undefined && isAuthenticated === false) {
      history.push(LANDING);
    }

    if (location?.state && isAuthenticated === false) {
      const { orderId, userEmail } = location.state;
      const response = await trackOrder(orderId, userEmail);
      setOrders(response);
    }

    if (isAuthenticated) {
      const response = await getAllOrders(userId);
      setOrders(response);
    }
  }, [isAuthenticated, userId, location?.state, history]);

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
    const response = await getOrderDetails(orderId);
    setOrderDetails({ allOrders: response, totalAmount });
  }, []);

  const downloadPdf =  useCallback(async (orderId) => {
     const response = await downloadPDF(orderId,languageId);
     const file = new Blob([response], {
      type: 'application/pdf',
    });
     saveAs(file, 'Order');
    // const file = new Blob([response], {
    //   type: 'application/pdf',
    // });
    //   const fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);
   },[languageId]);

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
