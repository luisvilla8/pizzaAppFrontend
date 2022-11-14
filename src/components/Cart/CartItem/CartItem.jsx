import { useCartContext } from "../../../context";
import { MenuButton } from "../../shared/MenuButton/MenuButton";
import { PizzaBg } from "../../shared/PizzaBg";
import style from "./CartItem.module.css";

export const CartItem = ({ product = {} }) => {

  const {
    cartIsOpen,
    handleRemoveItem,
    handleIncreaseItem,
    handleDecreaseItem
  } = useCartContext();

  return (
    <div className={style.card}>
      <MenuButton isActive="active" handleChange={() => handleRemoveItem(product.id)}/>
      <picture className={style.card__picture}>
        <img src="src/assets/pizza.png" alt="" />
      </picture>
      <div className={style.card__content}>
        <p className={style.card__name}>{product.nombre}</p>
        <div className={style.card__footer}>
          <div>
            <p className={style.card__precioFinal}>S/ {product.precioFinal}</p>
            <div className={style.counter__container}>
              <button className={style.btnCounter} onClick={() => handleDecreaseItem(product.id)}>-</button>
              <span className={style.counter__value}>{product.cantidad}</span>
              <button className={style.btnCounter} onClick={() => handleIncreaseItem(product.id)}>+</button>
            </div>
          </div>
          <div className={style.btn__container}>
            <span className={style.card__precioTotal}>S/ {product.precioTotal}</span>
          </div>
        </div>
      </div>
      <PizzaBg qty={15}/>
    </div>
  );
};
