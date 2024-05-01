import React, { useState, createContext, useContext } from "react";

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addOrderItem = (item) => {
    setOrder([...order, item]);
  };

  const removeOrderItem = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  return (
    <OrderContext.Provider value={{ order, addOrderItem, removeOrderItem }}>
      {children}
    </OrderContext.Provider>
  );
};
