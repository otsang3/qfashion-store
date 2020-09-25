import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalState';
import { FaApplePay, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import { SiGooglepay } from 'react-icons/si';

function Cart(props) {

    const globalContext = useContext(GlobalContext)
    const { cart } = globalContext;
    const [total, setTotal] = useState(0)
    const deliveryCharge = 5.99

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
                <form>
                    <p>Add a discount code</p>
                    <div className="cart-form-discount">
                        <input className="discount-input" type="text"/>
                        <button className="discount-btn">ADD</button>
                    </div> 
                </form>
                <p className="cart-summary-display">
                    <span>Subtotal</span>
                    <span>£{total}</span>
                </p>
                <p className="cart-summary-display">
                    <span>Delivery</span>
                    <span>£{deliveryCharge}</span>
                </p>
                <h3 className="cart-summary-display">
                    <span>Total</span>
                    <span>£{total + deliveryCharge}</span>
                </h3>
                <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
                <p>We accept</p>
                <p className="payment-icons">
                    <FaApplePay size={40}/>
                    <SiGooglepay size={40}/>
                    <FaCcMastercard size={40}/>
                    <FaCcPaypal size={40}/>
                    <RiVisaLine size={40}/>
                </p>
            </div>
        </div>
    )
}

export default Cart;