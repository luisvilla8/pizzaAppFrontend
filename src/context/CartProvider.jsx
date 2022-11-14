import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { CartReducer } from '../hooks/CartReducer';
import { getSumTotal } from '../utils';

export const CartContext = createContext({
  cartState: [],
  cartIsOpen: false,
  cartPrecioTotal: 0,
  handleToggleCartIsOpen: () => {},
  handleAddItem: () => {},
  handleRemoveItem: () => {},
  handleIncreaseItem: () => {},
  handleDecreaseItem: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children = "" }) => {

  const INITIAL_STATE = [];

  const [cartState, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartPrecioTotal, setCartPrecioTotal] = useState(0);

  useEffect(() => {
    const newPrecioTotal = getSumTotal(cartState, "precioFinal");
    setCartPrecioTotal(newPrecioTotal);
  }, [cartState])
  

  const handleAddItem = (item) => {
    dispatch({ type: 'addItem', payload: item });
  };
  const handleRemoveItem = (id) => {
    dispatch({ type: 'removeItem', payload: id });
  };
  const handleIncreaseItem = (id) => {
    dispatch({ type: 'increaseQuantity', payload: id });
  };
  const handleDecreaseItem = (id) => {
    dispatch({ type: 'decreaseQuantity', payload: id });
  };
  const handleToggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <CartContext.Provider value={
      {
        cartState,
        cartIsOpen,
        cartPrecioTotal,
        handleToggleCartIsOpen,
        handleAddItem,
        handleRemoveItem,
        handleIncreaseItem,
        handleDecreaseItem
      }
    }>
      {children}
    </CartContext.Provider>
  )
}
