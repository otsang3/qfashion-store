import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

function GlobalState(props) {

    const [state, setState ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/store")
        .then(res => res.json())
        .then(data => {setState(data[0])})
    }, [])

    if (state) {
        return(
            <GlobalContext.Provider value={state}>
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



