import React from 'react';
import ProductDetail from './ProductDetail';

function ProductItem(props) {

    const renderItem = () => {
        for (let category in props.state) {
            if (category.toLowerCase() === props.name.name.toLowerCase()) {
                for (let item of props.state[category]) {
                    console.log(props.name.product)
                    if (item.name.split(" ").join("-").toLowerCase() === props.name.product.toLowerCase())
                    return <ProductDetail item={item}/>
                }
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