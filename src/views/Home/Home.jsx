import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CartIcon,
  CartItem,
  CartProducts,
  ListProducts,
  MenuButton,
  Nav,
  SalesForm,
  Title,
} from "../../components";
import { useCartContext } from "../../context/CartProvider";
import { products as INITIAL_PRODUCTS } from '../../mock-data'
import { useToggle } from '../../hooks'
import style from "./Home.module.css";


export const Home = () => {
  const [isActive, setIsActive] = useState("");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const searchElement = useRef();

  const {state: isOpenModal, handleToggle} = useToggle(false)

  const handleChange = () => {
    const newIsActive = isActive === "active" ? "" : "active";
    setIsActive(newIsActive);
  };

  const {
    cartState,
    cartIsOpen,
    cartPrecioTotal,
    handleToggleCartIsOpen,
  } = useCartContext();

  const handleFilterItems = () => {
    const filteredProducts = INITIAL_PRODUCTS.filter((product) =>{
        return product.nombre.toLowerCase().includes(searchElement.current.value.toLowerCase())
    })
    setProducts(filteredProducts);
  }

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
        ref={searchElement}
        placeholder="¿Qué producto buscas?"
        className={style.input__search}
        onChange={handleFilterItems}
      />
      <ListProducts products={products}>
        {products.map((product, key) => (
          <Card key={key} product={product} handleToggle={handleToggle} />
        ))}
      </ListProducts>
      <CartProducts
        isopen={cartIsOpen}
        cartState={cartState}
        precioTotal={cartPrecioTotal}
        handleToggleCartIsOpen={handleToggleCartIsOpen}
        handleToggle={handleToggle}
      >
        {cartState.map((product, key) => (
          <CartItem product={product} key={key} />
        ))}
      </CartProducts>
      <SalesForm isOpen={isOpenModal} handleToggle={handleToggle} />
    </>
  );
};
