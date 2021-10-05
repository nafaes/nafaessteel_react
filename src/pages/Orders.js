import React, { useCallback, useContext, useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Orders from "../components/TrackOrder/Orders";
import {
  getAllOrders,
  getOrderDetails,
  trackOrder,
} from "../services/trackOrder";
import { GlobalContext } from "../context/Provider";
import { LANDING } from "../constants/routes";

const allOrders = [
  {
    orderId: 1,
    itemName: "Kuwaiti Iron",
    orderPlaced: "10 August 2021",
    total: "KWD 90.00",
    shipTo: "Kuwait",
    image: "/brick.jpg",
  },
  {
    orderId: 2,
    itemName: "Wood",
    orderPlaced: "12 August 2021",
    total: "KWD 110.00",
    shipTo: "Japan",
    image: "/brick.jpg",
  },
];

const columns = [
  { title: "Item Name", field: "itemName" },
  { title: "Order Placed", field: "orderPlaced" },
  { title: "Shiped To", field: "shipTo" },
  { title: "Total", field: "total", type: "currency" },
];

const OrdersPage = (props) => {
  const { location, history } = props;
  const {
    userState: { isAuthenticated, userId },
  } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    allOrders: [],
    totalAmount: 0,
  });

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

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Order Details", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: allOrders,
      startY: doc.autoTable() + 70,

      margin: { horizontal: 10 },
      styles: { overflow: "linebreak" },
      bodyStyles: { valign: "top" },
    });
    doc.save("orders.pdf");
  };

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
