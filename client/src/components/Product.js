import React from 'react';

function Product(props) {

    const prodName = props.item.name.split(" ").join("-").toLowerCase();
    const prodUrl = `/${props.category}/${props.prodType}/${prodName}`
    console.log(props.item.imgUrl[0]);

    return(
        <div className="prod-container">
            <a href={prodUrl}>
            <img src={require("../images" + props.item.imgUrl[0])} alt="product"/>
            <p>{props.item.name}</p>
            </a>
        </div>
    )
}

export default Product;