import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CartIcon,
  CartProducts,
  ListProducts,
  MenuButton,
  Nav,
  Title,
} from "../../components";
import { useCartContext } from "../../context/CartProvider";
import { getSumTotal } from "../../utils";
import style from "./Home.module.css";

export const Home = () => {
  const [isActive, setIsActive] = useState("");

  const handleChange = () => {
    const newIsActive = isActive === "active" ? "" : "active";
    setIsActive(newIsActive);
  };

  const {
    cartState,
    cartIsOpen,
    handleToggleCartIsOpen,
  } = useCartContext();

  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(getSumTotal(cartState, "precioFinal"));
  }, [cartState]);

  return (
    <>
      <div className={style.header}>
        <Title>Fetuccini</Title>
        <div className={style.header__btn}>
          <CartIcon
            color="#b3b3b3"
            text={cartState.length}
            onClick={handleToggleCartIsOpen}
          />
          <MenuButton handleChange={handleChange} isActive={isActive} />
          <Nav isActive={isActive}>
            <Link to="register">Llámanos</Link>
            <Link to="register">Whatsapp</Link>
            <Link to="register">Registrate</Link>
            <Link to="/login">Iniciar sesión</Link>
          </Nav>
        </div>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Qué producto buscas?"
        className={style.input__search}
      />
      <ListProducts />
      <CartProducts
        isopen={cartIsOpen}
        cartState={cartState}
        precioTotal={precioTotal}
        handleToggleCartIsOpen={handleToggleCartIsOpen}
      />
    </>
  );
};
