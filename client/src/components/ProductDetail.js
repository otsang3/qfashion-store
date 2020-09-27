import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from './GlobalState';

toast.configure()
function ProductDetail(props) {

    const globalContext = useContext(GlobalContext);
    const { addToCart } = globalContext;
    const [imgDisplay, setDisplay] = useState(props.item.imgUrl[0])
    const [itemSize, setSize] = useState(props.item.size[0])
    const item = props.item;
    const notify = () => {
        toast.info('Added to Bag',{
            position: "top-center",
            autoClose: 1750,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false
        })
    }
  

    const handleAdd = (item) => {
        const addItem = {...item, size: itemSize}
        addToCart(addItem);
        notify();
    }

    const changeDisplay = (imgUrl) => {
        setDisplay(imgUrl);
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value)
    }

    const renderOptions = () => {
        const sizeArr = [];
        item.size.map((size, index) => sizeArr.push(<option key={index}>{size}</option>))
        return sizeArr;
    }

    const renderPreviews = () => {
        const imageArr = []
        item.imgUrl.map((image, index) => {
            imageArr.push(<img key={index} onClick={() => changeDisplay(image)} src={require('../images' + image)}/>)
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
                <select onChange={handleSizeChange}>
                    {renderOptions()}
                </select>
                <br/>
                <button onClick={() => handleAdd(item)}>Add to Bag</button>
            </div>
            <ToastContainer style={{width: "10em", textAlign: "center"}} limit={1}/>
        </div>
    )
}

export default ProductDetail;