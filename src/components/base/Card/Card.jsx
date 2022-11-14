import { CartIcon, PizzaBg } from '../../../components';
import { useCartContext } from '../../../context/CartProvider';
import style from './Card.module.css'

export const Card = ({ product = {} }) => {

    const {
        cartState,
        handleAddItem,
        // handleIncreaseItem,
      } = useCartContext();

    return(
        <div className={style.card}>
            <picture className={style.card__picture}>
                <img src="src/assets/pizza.png" alt="" />
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
                    <button className={style.card__btnComprar}>Comprar</button>
                </div>
            </div>
            <PizzaBg qty={10}/>
        </div>  
    );
}