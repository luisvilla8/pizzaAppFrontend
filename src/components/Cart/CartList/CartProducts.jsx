import { useEffect, useState } from 'react';
import { MenuButton } from '../../../components';
import style from './CartProducts.module.css'

export const CartProducts = ({ isopen = false, handleToggleCartIsOpen, precioTotal = 0, handleToggle, children }) => {

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
        { children }
      </div>
      <div className={style.footer}>
        <h3>Precio Total:</h3>
        <span>S/ {precioTotal}</span>
        <button className={style.btnComprar} onClick={ () => {
          handleToggleCartIsOpen();
          handleToggle(); 
        }}>REALIZAR COMPRA</button>
      </div>
    </div>
  )
}
