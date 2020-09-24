import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import NotFoundPage from './NotFoundPage';
import ProductDetail from './ProductDetail';

function ProductItem(props) {

    const globalContext = useContext(GlobalContext);
    const prodCategories = globalContext[props.category];
    const { match: {params}} = props.name;
    console.log(prodCategories);

    const renderItem = () => {
        for (let category in prodCategories) {
            if (category.toLowerCase() === params.name.toLowerCase()) {
                for (let item of prodCategories[category]) {
                    if (item.name.split(" ").join("-").toLowerCase() === params.product.toLowerCase())
                    return <ProductDetail item={item}/>
                }
                return <NotFoundPage/>
            }
        }
    }

    return(
        <div>
            {renderItem()}
        </div>
    )
}

export default ProductItem;