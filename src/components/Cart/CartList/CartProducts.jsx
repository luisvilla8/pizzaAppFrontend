import { useEffect, useState } from 'react';
import { CartItem, MenuButton } from '../../../components';
import { getSumTotal } from '../../../utils';
import style from './CartProducts.module.css'

export const CartProducts = ({ isopen = false, cartState = [], handleToggleCartIsOpen, precioTotal = 0 }) => {

  const handleSetClassnameByIsOpen = () => {
    return isopen ? "isOpen" : "";
  }

  
  

  return (
    <div className={style.container} isopen={handleSetClassnameByIsOpen() }>
      <div className={style.header}>
        <h2 className={style.title}>Carrito</h2>
        <MenuButton isActive="active" handleChange={ handleToggleCartIsOpen }/>
      </div>
      <div className={style.list__products}>
      {
        cartState.map((product, key) => (
          <CartItem product={product} key={key} />
        ))
      }
      </div>
      <div className={style.footer}>
        <h3>Precio Total:</h3>
        <span>S/ {precioTotal}</span>
        <button className={style.btnComprar}>REALIZAR COMPRA</button>
      </div>
    </div>
  )
}
