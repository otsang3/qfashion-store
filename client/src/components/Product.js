import React from 'react';

function Product(props) {

    return(
        <div className="prod-container">
            <h4>{props.item.name}</h4>
        </div>
    )
}

export default Product;