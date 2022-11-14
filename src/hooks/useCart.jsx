import { useReducer } from 'react';
import { CartReducer } from './CartReducer';

export const useCart = () => {
  const INITIAL_STATE = [];

  const [cartState, dispatch] = useReducer(CartReducer, INITIAL_STATE);

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

  return {
    cartState,
    handleAddItem,
    handleRemoveItem,
    handleIncreaseItem,
    handleDecreaseItem,
  };
};
