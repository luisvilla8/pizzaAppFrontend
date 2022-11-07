import { products } from '../../../mock-data'

export const ListProducts = () => {

    return(
        <>
            {products.map( (item, key) => 
                <p key={key}>item</p>
            )}
        </>
    );
}