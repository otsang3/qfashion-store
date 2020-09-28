import React, { createContext, useEffect, useState } from 'react';
import firebase from '../Firebase';

export const GlobalContext = createContext();

function GlobalState(props) {

    const [storeData, setStoreData ] = useState(null);
    const [cart, setCart] = useState([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('qfashion')
        .onSnapshot((snapshot) => {
            const fetchData = snapshot.docs[0].data()
            setStoreData(fetchData)
        })
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


