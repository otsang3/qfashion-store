import React from 'react';

function Nav() {

    return(
        <div className="nav-container">
            <div className="nav-col-1">
                QFashion
            </div>
            <div className="nav-list">
                <a href="/mens">MEN</a>
                <a href="/womens">WOMEN</a>
            </div>
        </div>
    )
}

export default Nav;