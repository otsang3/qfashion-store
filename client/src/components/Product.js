import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {

    const prodName = props.item.name.split(" ").join("-").toLowerCase();
    const prodUrl = `/${props.category}/${props.prodType}/${prodName}`

    return(
        <div className="prod-container">
            <Link to={prodUrl}>
            <img src={require("../images" + props.item.imgUrl[0])} alt="product"/>
            <p>{props.item.name}</p>
            </Link>
        </div>
    )
}

export default Product;