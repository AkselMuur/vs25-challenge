import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (meal) => {
    setItems((prev) => [...prev, meal]);
  };

  const contextValue = {
    items,
    addItem,
  };
  console.log(items);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
