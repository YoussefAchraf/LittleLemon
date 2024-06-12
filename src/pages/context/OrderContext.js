import React, { useState, createContext, useContext } from "react";

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addOrderItem = (item) => {
    const existingItemIndex = order.findIndex((orderItem) => orderItem.title === item.title);
    if (existingItemIndex !== -1) {
      const newOrder = [...order];
      newOrder[existingItemIndex].quantity += item.quantity;
      setOrder(newOrder);
    } else {
      setOrder([...order, item]);
    }
  };

  const updateOrderItemQuantity = (index, quantity) => {
    const newOrder = [...order];
    newOrder[index].quantity = quantity;
    setOrder(newOrder);
  };

  const removeOrderItem = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  return (
    <OrderContext.Provider value={{ order, addOrderItem, updateOrderItemQuantity, removeOrderItem }}>
      {children}
    </OrderContext.Provider>
  );
};
