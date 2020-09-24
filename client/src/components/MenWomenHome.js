import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import SideNav from './SideNav';

function MenWomenHome(props) {

    const globalContext = useContext(GlobalContext)

    return(
        <div className="front-page-container">
            <div className="front-page-row-1">
                <SideNav category={props.category} list={globalContext[props.category]}/>
            </div>
            <div className="front-page-row-2">
                <img src={props.img} />
            </div>
        </div>
    )
}

export default MenWomenHome;