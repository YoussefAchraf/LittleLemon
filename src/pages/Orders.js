import React from "react";
import { useOrder } from "./context/OrderContext";

const Orders = () => {
  const { order } = useOrder();

  return (
    <section className="w-full h-auto mt-[15dvh] overflow-x-hidden">
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
          <p>{order.reduce((acc, curr) => acc + curr.price, 0)}</p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4">
            Validate Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Orders;
