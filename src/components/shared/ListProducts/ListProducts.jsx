import { products } from '../../../mock-data'
import { Card } from '../../../components';
import style from './ListProducts.module.css'

export const ListProducts = () => {


    return (
        <div className={style.container}>
            {products.map((product, key) =>
                <Card key={key} product={product} />
            )}
        </div>
    );
}