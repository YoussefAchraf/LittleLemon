import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useOrder } from "./context/OrderContext";

const Orders = () => {
  const { order, updateOrderItemQuantity } = useOrder();
  const [totalSum, setTotalSum] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    let sum = 0;
    order.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      sum += price * item.quantity;
    });
    setTotalSum(sum.toPrecision(4));
  }, [order]);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 20) {
      updateOrderItemQuantity(index, newQuantity);
    }
  };

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
      <section className="mt-[15dvh] w-full h-auto my-16 overflow-x-hidden flex justify-center">
        <div className="w-full max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-4 text-gray-700">Your Order</div>
            {order.length > 0 ? (
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Item</th>
                    <th className="border px-4 py-2">Quantity</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-4 py-2">{item.title}</td>
                      <td className="border px-4 py-2">
                        <div className="flex justify-center items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity - 1)}
                            className="px-2 py-1 bg-red-500 text-white rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity + 1)}
                            className="px-2 py-1 bg-green-500 text-white rounded"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">{(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}$</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No items in your order</p>
            )}
            <div className="font-bold text-2xl text-gray-700 mt-4">Total: {totalSum}$</div>
            <button
              onClick={handleValidateOrder}
              className={`font-bold py-2 px-4 rounded mt-4 ${order.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-500 text-white'}`}
              disabled={order.length === 0}
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
