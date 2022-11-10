import { Cart, PizzaBg } from '../../../components';
import style from './Card.module.css'

export const Card = ({ product = {} }) => {
    return(
        <div className={style.card}>
            <picture className={style.card__picture}>
                <img src="src/assets/pizza.png" alt="" />
            </picture>
            <p className={style.card__name}>{product.nombre}</p>
            <p className={style.card__description}>{product.descripcion}</p>
            <div className={style.card__footer}>
                <div>
                    <p className={style.card__precio}>S/ {product.precio}</p>
                    <p className={style.card__precioFinal}>S/ {product.precioFinal}</p>
                </div>
                <div className={style.btn__container}>
                    <button className={style.card__btnCart}><Cart /></button>
                    <button className={style.card__btnComprar}>Comprar</button>
                </div>
            </div>
            <PizzaBg qty={10}/>
        </div>  
    );
}