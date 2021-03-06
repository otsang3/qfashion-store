import React, { useEffect, useState } from 'react';
import {
    FaApplePay,
    FaShoppingCart,
    FaCcMastercard,
    FaCcPaypal,
} from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import { SiGooglepay } from 'react-icons/si';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/index';

function Cart() {
    const [discount, setDiscount] = useState(0);
    const [input, setInput] = useState('');
    const [subTotal, setSubTotal] = useState(0);
    const deliveryCharge = 5.99;

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart.length > 0) {
            const total = cart.reduce(function (runningTotal, item) {
                return runningTotal + item.price;
            }, 0);
            setSubTotal(parseFloat(total.toFixed(2)));
        }
    }, [cart]);

    const discountCode = 'QSALE10';

    const handleDiscount = (event) => {
        event.preventDefault();
        if (discount === 0) {
            if (input.toUpperCase() === discountCode) {
                setDiscount(subTotal / 10);
            }
        }
    };

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const renderCartItems = () => {
        const cartArr = [];
        cart.map((item, index) =>
            cartArr.push(
                <div className="cart-item" key={index}>
                    <div className="cart-item-image">
                        <img
                            src={require('../images' + item.imgUrl[0])}
                            alt="cart-item"
                        />
                    </div>
                    <div className="cart-item-desc">
                        <h4>{item.name}</h4>
                        <p>Price: £{item.price}</p>
                        <p>Colour: {item.colour}</p>
                        <p>Size: {item.size}</p>
                        <button onClick={() => dispatch(removeFromCart(index))}>
                            Remove item
                        </button>
                    </div>
                </div>
            )
        );
        return cartArr;
    };

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <p>
                    <FaShoppingCart color="grey" size={40} />
                </p>
                <p>Your shopping bag is empty</p>
                <p style={{ fontSize: '0.8em', marginBottom: '2em' }}>
                    Once you have added items in your shopping bag, you can
                    check out from here
                </p>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-row-1">{renderCartItems()}</div>
            <div className="cart-row-2">
                <form>
                    <p>Add a discount code</p>
                    <div className="cart-form-discount">
                        <input
                            className="discount-input"
                            onChange={handleInput}
                            type="text"
                        />
                        <button
                            className="discount-btn"
                            onClick={handleDiscount}
                        >
                            ADD
                        </button>
                    </div>
                </form>
                <p className="cart-summary-display">
                    <span>Subtotal</span>
                    <span>£{subTotal}</span>
                </p>
                <p className="cart-summary-display">
                    <span>Discount</span>
                    <span>-£{discount.toFixed(2)}</span>
                </p>
                <p className="cart-summary-display">
                    <span>Delivery</span>
                    <span>£{deliveryCharge}</span>
                </p>
                <h3 className="cart-summary-display">
                    <span>Total</span>
                    <span>
                        £{(subTotal + deliveryCharge - discount).toFixed(2)}
                    </span>
                </h3>
                <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
                <p style={{ marginBottom: '1em' }}>We accept</p>
                <p className="payment-icons">
                    <FaApplePay size={40} />
                    <SiGooglepay size={40} />
                    <FaCcMastercard size={40} />
                    <FaCcPaypal size={40} />
                    <RiVisaLine size={40} />
                </p>
                <p style={{ color: 'grey', marginTop: '3em' }}>
                    We are happy to refund within 28 days for any unsuitable
                    items, provided they are in resalable condition. Please note
                    that our Return policy may differ for Designer, Special
                    collections and our external home assortment.
                </p>
            </div>
        </div>
    );
}

export default Cart;
