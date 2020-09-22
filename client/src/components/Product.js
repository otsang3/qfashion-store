import React from 'react';

function Product(props) {

    return(
        <div className="prod-container" onClick={() => console.log("div clicked")}>
            <a href="/mens">
            <img src={require("../images" + props.item.imgUrl)} alt="product-image"/>
            <p>{props.item.name}</p>
            </a>
            
        </div>
    )
}

export default Product;