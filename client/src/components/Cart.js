import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalState';

function Cart(props) {

    const globalContext = useContext(GlobalContext)
    const { cart } = globalContext;
    const [total, setTotal] = useState(0)
    console.log(cart);

    useEffect(() => {
        if (cart.length > 0) {
            const total = cart.reduce(function(runningTotal, item) {
                return runningTotal + item.price
            }, 0)
            setTotal(total)
        } 
    }, [props])

    
    const renderCartItems = () => {
        const cartArr = [];
        cart.map((item, index) => (
            cartArr.push(<div className="cart-item" key={index}>
                <div className="cart-item-image">
                    <img src={require('../images' + item.imgUrl[0])}/>
                </div>
                <div className="cart-item-desc">
                    <h4>{item.name}</h4>
                    <p>£{item.price}</p>
                    <label>Colour: {item.colour}</label>
                </div>
            </div>
        )))
        return cartArr;
    }

    return(
        <div className="cart-container">
            <div className="cart-row-1">
                {renderCartItems()}
            </div>
            <div className="cart-row-2">
                div2
            </div>
        </div>
    )
}

export default Cart;