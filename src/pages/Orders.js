import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Orders from "../components/TrackOrder/Orders";

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

const OrdersPage = () => {
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

  return <Orders allOrders={allOrders} downloadPdf={downloadPdf} />;
};

export default OrdersPage;
