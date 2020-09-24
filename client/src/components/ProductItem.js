import React from 'react';
import NotFoundPage from './NotFoundPage';
import ProductDetail from './ProductDetail';

function ProductItem(props) {

    const renderItem = () => {
        for (let category in props.state) {
            if (category.toLowerCase() === props.name.name.toLowerCase()) {
                for (let item of props.state[category]) {
                    if (item.name.split(" ").join("-").toLowerCase() === props.name.product.toLowerCase())
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