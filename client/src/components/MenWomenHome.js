import React from 'react';
import { useRoutes } from 'hookrouter';
import SideNav from './SideNav';

function MenWomenHome(props) {

    console.log(props.state)

    return(
        <div className="front-page-container">
            <div className="front-page-row-1">
                <SideNav list={props.state}/>
            </div>
            <div className="front-page-row-2">
                <img src={props.img} />
            </div>
        </div>
    )
}

export default MenWomenHome;