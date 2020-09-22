import React from 'react';
import Product from './Product';

function ProductList(props) {

    const renderList = () => {
        let list = []
        for (let category in props.state) {
            if (category.toLowerCase() === props.name.name.toLowerCase()) {
                props.state[category].map((item, index) => {
                    list.push(<Product key={index} item={item}></Product>)
                })
            }
        }
        return list;
    }

    return(
        <div>
            {renderList()}
        </div>
    )
}

export default ProductList;