import { CartIcon, PizzaBg } from '../../../components';
import { useCartContext } from '../../../context/CartProvider';
import style from './Card.module.css'

export const Card = ({ product = {}, handleToggle }) => {

    const {
        cartState,
        handleAddItem,
      } = useCartContext();

    return(
        <div className={style.card}>
            <picture className={style.card__picture}>
                <img src="https://raw.githubusercontent.com/luisvilla8/pizzaAppFrontend/dev/src/assets/pizza.png" alt="pizza" />
            </picture>
            <p className={style.card__name}>
                {product.nombre}
            </p>
            <p className={style.card__description}>{product.descripcion}</p>
            <div className={style.card__footer}>
                <div>
                    <p className={style.card__precio}>S/ {product.precio}</p>
                    <p className={style.card__precioFinal}>S/ {product.precioFinal}</p>
                </div>
                <div className={style.btn__container}>
                    <button 
                        className={style.card__btnCart}
                        onClick={() => handleAddItem(product)}
                    >
                        <CartIcon />
                    </button>
                    <button className={style.card__btnComprar} onClick={ handleToggle }>Comprar</button>
                </div>
            </div>
            <PizzaBg qty={10}/>
        </div>  
    );
}
