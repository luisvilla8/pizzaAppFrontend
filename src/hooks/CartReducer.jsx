export const CartReducer = (cartState, action) => {
  let newState = [];
  switch (action.type) {
    case 'addItem':
      const { id: idItem, nombre, precio, precioFinal } = action.payload;
      const newCartState = cartState.filter((item) => item.id !== idItem) ?? [];
      const itemFound = cartState.find((item) => item.id === idItem) ?? {};
      const newItem = {
        id: idItem,
        nombre,
        precio,
        precioFinal,
        precioTotal: itemFound.precioTotal ? itemFound.precioTotal + precioFinal : precioFinal,
        cantidad: itemFound.cantidad ? itemFound.cantidad + 1 : 1,
      };
      return [...newCartState, newItem];
    case 'removeItem':
      return [...cartState.filter((item) => item.id !== action.payload)];
    case 'increaseQuantity':
      newState = cartState.map((item) => 
        item.id === action.payload
          ? { ...item, cantidad: item.cantidad + 1, precioTotal: item.precioTotal + item.precioFinal }
          : item
      );
      return newState;
    case 'decreaseQuantity':
      newState = cartState.map((item) =>
        item.id === action.payload && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1, precioTotal: item.precioTotal - item.precioFinal }
          : item
      );
      return newState;
  }
};
