import React from 'react';
import SideNav from './SideNav';

function MenWomenHome(props) {

    return(
        <div className="front-page-container">
            <div className="front-page-row-1">
                <SideNav category={props.category} list={props.state}/>
            </div>
            <div className="front-page-row-2">
                <img src={props.img} />
            </div>
        </div>
    )
}

export default MenWomenHome;