import React from "react";
import "../assets/css/Order.css";
import Navbar from "./Navbar";
const Order = () => {
  return (
    <div>
      <div className="order_container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Order;
