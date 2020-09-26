import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

function GlobalState(props) {

    const [storeData, setStoreData ] = useState(null);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/store")
        .then(res => res.json())
        .then(data => {setStoreData(data[0])})
    }, [])

    const addToCart = (product) => {
        setCart(prevState => [...prevState, product])
    }

    const removeFromCart = (prodIndex) => {
        setCart(prevState => {
            const cartCopy = [...prevState]
            cartCopy.splice(prodIndex, 1)
            return cartCopy;
        })
    }

    if (storeData) {
        return(
            <GlobalContext.Provider value={{
                addToCart: addToCart,
                cart: cart,
                removeFromCart: removeFromCart,
                setCart: setCart,
                storeData: storeData
                }}>
                {props.children}
            </GlobalContext.Provider>
        )
    } else {
        return(
            <div></div>
        )
    }
    
}

export default GlobalState;



