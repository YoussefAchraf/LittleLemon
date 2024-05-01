import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useOrder } from "./context/OrderContext";
const Orders = () => {
  const { order } = useOrder();
  const [totalSum, setTotalSum] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  useEffect(() => {
    let sum = 0;
    order.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      sum += price;
    });
    setTotalSum(sum);
  }, [order]);
  const handleValidateOrder = () => {
    setShowSuccessMessage(true);
  };
  return (
    <>
      <Helmet>
        <title>Orders Page - Little Lemon</title>
        <meta
          name="description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta property="og:title" content="Orders Page - Little Lemon" />
        <meta
          property="og:description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-orders-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orders Page - Little Lemon" />
        <meta
          name="twitter:description"
          content="Manage your orders with ease at Little Lemon. View your order history, track current orders, and enjoy convenient online ordering services. Experience hassle-free dining with Little Lemon."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-orders-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Little Lemon, restaurant, orders, online ordering" />
      </Helmet>
      <section className="w-full h-auto my-[15dvh] overflow-x-hidden">
        <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">Your Order</div>
            {order.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <div className="font-bold text-xl text-gray-700">Total</div>
            <p>{totalSum}</p>
            <button 
              onClick={handleValidateOrder} 
              className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Validate Order
            </button>
            {showSuccessMessage && <p className="text-green-600 mt-2">Order successfully validated!</p>}
          </div>
        </div>
      </section>
    </>
  );
};
export default Orders;
