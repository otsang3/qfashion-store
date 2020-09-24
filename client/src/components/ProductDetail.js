import React from 'react';

function ProductDetail(props) {

    const item = props.item;
    const renderOptions = () => {
        const sizeArr = [];
        item.size.map((size, index) => sizeArr.push(<option key={index}>{size}</option>))
        return sizeArr;
    }
    console.log(props);

    return(
        <div className="prod-detail-container">
            <div className="prod-detail-row-1">
                <img src={require("../images" + props.item.imgUrl)} alt="product"/>
            </div>
            <div className="prod-detail-row-2">
                <h4>{item.name}</h4>
                <h4>£{item.price}</h4>
                <p>Colour: {item.colour}</p>
                <label>Size: </label>
                <select>
                    {renderOptions()}
                </select>
                <br/>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;