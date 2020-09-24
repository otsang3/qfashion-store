import React from 'react';

function Product(props) {

    const prodName = props.item.name.split(" ").join("-").toLowerCase();
    const prodUrl = `/${props.category}/${props.prodType}/${prodName}`

    return(
        <div className="prod-container">
            <a href={prodUrl}>
            <img src={require("../images" + props.item.imgUrl)} alt="product"/>
            <p>{props.item.name}</p>
            </a>
        </div>
    )
}

export default Product;