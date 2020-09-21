import React from 'react';
import { useRoutes } from 'hookrouter';
import SideNav from './SideNav';

function MenWomenHome(props) {

    return(
        <div className="front-page-container">
            <div className="front-page-row-1">
                <SideNav list={["shoes", "jackets"]}/>
            </div>
            <div className="front-page-row-2">
                <img src={props.img} />
            </div>
        </div>
    )
}

export default MenWomenHome;