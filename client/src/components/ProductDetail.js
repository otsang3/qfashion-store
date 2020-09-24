import React, { useState } from 'react';

function ProductDetail(props) {

    const [imgDisplay, setDisplay] = useState(props.item.imgUrl[0])

    const item = props.item;

    const changeDisplay = (imgUrl) => {
        setDisplay(imgUrl);
    }

    const renderOptions = () => {
        const sizeArr = [];
        item.size.map((size, index) => sizeArr.push(<option key={index}>{size}</option>))
        return sizeArr;
    }

    const renderPreviews = () => {
        const imageArr = []
        item.imgUrl.map(image => {
            imageArr.push(<img onClick={() => changeDisplay(image)} src={require('../images' + image)}/>)
        })
        return imageArr;
    }

    return(
        <div className="prod-detail-container">
            <div className="prod-detail-row-1">
                {renderPreviews()}
            </div>
            <div className="prod-detail-row-2">
                <img src={require("../images" + imgDisplay)} alt="product"/>
            </div>
            <div className="prod-detail-row-3">
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